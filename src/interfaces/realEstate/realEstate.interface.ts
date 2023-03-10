import {z} from "zod";
import { createAddressSchema, createRealStateSchema, realEstateArray, returnAddress, returnRealState } from "../../schemas/realEstate/realEstate.schema";

type iCreateAddress = z.infer<typeof createAddressSchema>
type iReturnAddress = z.infer<typeof returnAddress>
type iCreateRealState = z.infer<typeof createRealStateSchema>
type iReturnRealState = z.infer<typeof returnRealState>
type iRealStateArray = z.infer<typeof realEstateArray>

export {
    iCreateAddress,
    iReturnRealState,
    iCreateRealState,
    iReturnAddress,
    iRealStateArray
}