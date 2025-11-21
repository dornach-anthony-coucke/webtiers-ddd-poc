import type { AddressVO } from "@webtiers-ddd-poc/shared-domain";
import type { CompanyLegalIdentityVO } from "../value-objects/company-legal-identity.value-object.ts";

export class CompanyCreatedEvent {
    constructor(
        public readonly legalId: string,
        public readonly companyLegalIdentity: CompanyLegalIdentityVO,
        public readonly headquarterAddress: AddressVO,
    ) {}
}