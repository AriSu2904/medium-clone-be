import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';

@Entity()
export class Otp {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  digit: string;

  @Column({ type: 'timestamp', nullable: true })
  expiredAt?: Date;

  @BeforeInsert()
  setDefaultOtpExpiry() {
    if (!this.expiredAt) {
      this.expiredAt = new Date(Date.now() + 5 * 60 * 1000);
    }
  }
}
