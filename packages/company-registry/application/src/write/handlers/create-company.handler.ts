import type { ICommandHandler } from '@webtiers-ddd-poc/shared-application';
import type { CreateCompanyCommand } from '../commands/create-company.command.js';
import {
  CompanyAggregate,
  type CompanyRegistryRepositoryPort,
} from '@webtiers-ddd-poc/company-registry-domain';

export class CreateCompanyHandler
  implements ICommandHandler<CreateCompanyCommand>
{
  constructor(
    private readonly companyRegistryRepository: CompanyRegistryRepositoryPort
  ) {}
  async execute(command: CreateCompanyCommand): Promise<void> {
    const company = CompanyAggregate.create(
      command.companyId,
      command.companyLegalIdentity,
      command.headquarterAddress
    );

    await this.companyRegistryRepository.save(company);
  }
}
