import type { SubdivisionAddressVO } from "../value-objects/subdivision-address.value-object.ts";

export class SubdivisionEntity {
    private constructor(public readonly subdivisionId: string, private address: SubdivisionAddressVO) {}

    static create(subdivisionId: string, address: SubdivisionAddressVO): SubdivisionEntity {
        return new SubdivisionEntity(subdivisionId, address);
    }
}