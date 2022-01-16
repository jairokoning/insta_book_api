import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./Category";
import { Type } from "./Type";

@Entity("profiles")
export class Profile {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  stars: number;

  @Column()
  priority: boolean;

  @Column()
  level: string;

  @Column()
  has_reference: boolean;

  @Column()
  downloaded: boolean;

  @Column()
  references_checked: boolean;

  @Column()
  tagged_checked: boolean;

  @Column()
  sugestions_checked: boolean;

  @ManyToMany(() => Category, { cascade: true })
  @JoinTable({
    name: 'profiles_categories',
    joinColumns: [{ name: 'profile_id' }],
    inverseJoinColumns: [{ name: 'category_id' }],
  })
  categories: Category[];

  @ManyToMany(() => Type, { cascade: true })
  @JoinTable({
    name: 'profiles_types',
    joinColumns: [{ name: 'profile_id' }],
    inverseJoinColumns: [{ name: 'type_id' }],
  })
  types: Type[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}