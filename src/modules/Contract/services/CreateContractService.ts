import { inject, injectable } from 'tsyringe';

import { IContractDTO } from '@modules/Contract/dtos/IContractDTO';
import { IContractRepository } from '@modules/Contract/repositories/IContractRepository';

@injectable()
export class CreateContractService {
  constructor(
    @inject('ContractRepository')
    private contractRepository: IContractRepository
  ) {}

  public async execute(data: IContractDTO): Promise<void> {
    await this.contractRepository.create(data);
  }
}
