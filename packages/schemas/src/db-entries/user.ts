// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import { GeneratedSchema } from '../foundations';

import { PasswordEncryptionMethod } from './custom-types';

export type UserDBEntry = {
  id: string;
  username?: string;
  primaryEmail?: string;
  primaryPhone?: string;
  passwordEncrypted?: string;
  passwordEncryptionMethod?: PasswordEncryptionMethod;
  passwordEncryptionSalt?: string;
};

export const Users: GeneratedSchema<UserDBEntry> = Object.freeze({
  table: 'users',
  tableSingular: 'user',
  fields: {
    id: 'id',
    username: 'username',
    primaryEmail: 'primary_email',
    primaryPhone: 'primary_phone',
    passwordEncrypted: 'password_encrypted',
    passwordEncryptionMethod: 'password_encryption_method',
    passwordEncryptionSalt: 'password_encryption_salt',
  },
  fieldKeys: [
    'id',
    'username',
    'primaryEmail',
    'primaryPhone',
    'passwordEncrypted',
    'passwordEncryptionMethod',
    'passwordEncryptionSalt',
  ],
});
