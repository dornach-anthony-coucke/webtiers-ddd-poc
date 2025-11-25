import type { CompanyAggregate } from '../aggregates/company.aggregate.js';

export interface CompanyRegistryRepositoryPort {
  save(company: CompanyAggregate): Promise<void>;
  loadOrFail(companyId: string): Promise<CompanyAggregate>;
}
