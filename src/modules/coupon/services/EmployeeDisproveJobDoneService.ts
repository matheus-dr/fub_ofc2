import { container, inject, injectable } from 'tsyringe';

import { CouponHandlerService } from '@shared/services/CouponHandlerService';
import { ICouponRepository } from '@modules/coupon/repositories/ICouponRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class EmployeeDisproveJobDoneService {
  constructor(
    @inject('CouponRepository')
    private couponRepository: ICouponRepository
  ) {}

  public async execute(id: number, user: { id: number }): Promise<void> {
    const service = container.resolve(CouponHandlerService);

    const { coupon } = await service.execute(id, user, 'employee');

    if (!coupon.isFinished) {
      throw new AppError('This job is not finished yet');
    }

    await this.couponRepository.employeeDisproveJobDone(id);
  }
}
