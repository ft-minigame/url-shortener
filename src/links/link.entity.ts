import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'; //data mapper랑 active record 두 방식이 있는데 data mapper썼음

@Entity()
export class Link {
  //Link라는 걸 엔티티로 데코레이트한거임
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  url: string;
}
