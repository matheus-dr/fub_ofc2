import { inject, injectable } from 'tsyringe';

import { ICouponDTO } from '@modules/Coupon/dtos/ICouponDTO';
import { ICouponRepository } from '@modules/Coupon/repositories/ICouponRepository';

@injectable()
export class UpdateCouponService {
  constructor(
    @inject('CouponRepository')
    private couponRepository: ICouponRepository
  ) {}

  public async execute(id: number, data: Partial<ICouponDTO>): Promise<void> {
    return this.couponRepository.update(id, data);
  }
}
