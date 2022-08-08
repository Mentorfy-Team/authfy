import { randomUUID } from 'crypto';

import { SocialConnector } from '@logto/connector-base-classes';
import {
  ConnectorError,
  ConnectorErrorCodes,
  GetAuthorizationUri,
  GetUserInfo,
  GetConnectorConfig,
} from '@logto/connector-types';
import { z } from 'zod';

import { defaultMetadata } from './constant';
import { mockSocialConfigGuard, MockSocialConfig } from './types';

export default class MockSocialConnector extends SocialConnector<MockSocialConfig> {
  constructor(getConnectorConfig: GetConnectorConfig) {
    super(getConnectorConfig);
    this.metadata = defaultMetadata;
    this.metadataParser();
  }

  public validateConfig(config: unknown): asserts config is MockSocialConfig {
    const result = mockSocialConfigGuard.safeParse(config);

    if (!result.success) {
      throw new ConnectorError(ConnectorErrorCodes.InvalidConfig, result.error);
    }
  }

  public getAuthorizationUri: GetAuthorizationUri = async ({ state, redirectUri }) => {
    return `http://mock.social.com/?state=${state}&redirect_uri=${redirectUri}`;
  };

  public getAccessToken = async () => randomUUID();

  public getUserInfo: GetUserInfo = async (data) => {
    const dataGuard = z.object({ code: z.string(), userId: z.optional(z.string()) });
    const result = dataGuard.safeParse(data);

    if (!result.success) {
      throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, JSON.stringify(data));
    }

    // For mock use only. Use to track the created user entity
    return {
      id: result.data.userId ?? `mock-social-sub-${randomUUID()}`,
    };
  };
}
