import {Repository} from "typeorm";

import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../errors";
import { tCreateSchedule } from "../../interfaces/schedules/schedules.interface";

const createSchedulesService = async (dataBody: tCreateSchedule, userId: number): Promise<any>=> {

    const selectDate = dataBody.date.split("/")
    const fullDate = selectDate + " " + dataBody.hour;
    const createDate = new Date(fullDate);

    const getHour:number = createDate.getHours();
    const createDateString = createDate.toString()
    const selectDay = createDateString.split(' ')

    if (getHour < 8 || getHour > 18 ) {
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
      }
    
      if (selectDay[0] === "Sat" || selectDay[0] === "Sun") {
        throw new AppError("Invalid date, work days are monday to friday", 400);
      }

    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const findRealEstate: RealEstate | null = await realEstateRepository.findOneBy({
          id: dataBody.realEstateId
    })

    if (!findRealEstate) {
        throw new AppError("RealEstate not found", 404);
      }

    const verifyingScheduleExists = await scheduleRepository.createQueryBuilder("schedules_users_properties")
    .where("schedules_users_properties.date = :date", {date: dataBody.date})
    .andWhere("schedules_users_properties.hour = :hour", {hour: dataBody.hour})
    .andWhere("schedules_users_properties.realEstateId = :realEstateId", {realEstateId: dataBody.realEstateId})
    .getOne()
  
    if(verifyingScheduleExists){
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }

    const verifyingUserDate = await userRepository
    .createQueryBuilder("users")
    .innerJoinAndSelect("users.schedules", "schedules_users_properties")
    .where("users.id = :id", {id: userId})
    .andWhere("schedules_users_properties.date = :date", { date: dataBody.date })
    .andWhere("schedules_users_properties.hour = :hour", { hour: dataBody.hour })
    .getOne();

    if (verifyingUserDate) {
        throw new AppError("User schedule to this real estate at this date and time already exists", 409);
      }

    const findUser: User | null = await userRepository.findOneBy({
        id: userId
    })

    if (!findUser) {
      throw new AppError("User not found", 404);
    }


    const createSchedule = scheduleRepository.create({
        ...dataBody,
        realEstate: findRealEstate,
        user:findUser
    })

    await scheduleRepository.save(createSchedule)

    return createSchedule

}

export default createSchedulesService