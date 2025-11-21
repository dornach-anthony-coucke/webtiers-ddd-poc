import { AbstractAggregate, type AddressVO } from '@webtiers-ddd-poc/shared-domain';
import type { CompanyRegistryEvent } from '../events/company-registry-event.type.js';
import { CompanyCreatedEvent } from '../events/company-created.event.js';
import type { CompanyLegalIdentityVO } from '../value-objects/company-legal-identity.value-object.js';
import { SubdivisionEntity } from '../entities/subdivision.entity.js';

export class CompanyAggregate extends AbstractAggregate<CompanyRegistryEvent> {
  private companyLegalIdentity: CompanyLegalIdentityVO | null = null;
  private subdivisions: SubdivisionEntity[] = [];

  constructor(public readonly companyId: string) {
    super();
  }

  static create(
    companyId: string,
    companyLegalIdentity: CompanyLegalIdentityVO,
    headquarterAddress: AddressVO
  ): CompanyAggregate {
    const newCompany = new CompanyAggregate(companyId);
    const companyCreatedEvent = new CompanyCreatedEvent(
      companyId,
      companyLegalIdentity,
      headquarterAddress
    );
    newCompany.recordEvent(companyCreatedEvent);
    newCompany.applyEvent<CompanyCreatedEvent>(companyCreatedEvent);
    return newCompany;
  }

  private onCompanyCreated(event: CompanyCreatedEvent) {
    this.companyLegalIdentity = event.companyLegalIdentity;
    const headquarter = SubdivisionEntity.create(
      `${this.companyId}-000000001`,
      event.headquarterAddress
    );
    this.subdivisions.push(headquarter);
  }

  protected applyEvent<Event extends CompanyRegistryEvent>(event: Event): void {
    if (event instanceof CompanyCreatedEvent) {
      this.onCompanyCreated(event);
    }
  }
}
