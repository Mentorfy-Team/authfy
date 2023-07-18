import { type SubscriptionUsage, type Subscription } from '@/cloud/types/router';
import FormCard from '@/components/FormCard';
import PlanDescription from '@/components/PlanDescription';
import PlanName from '@/components/PlanName';
import FormField from '@/ds-components/FormField';
import { type SubscriptionPlan } from '@/types/subscriptions';

import MauLimitExceedNotification from './MauLimitExceededNotification';
import NextBillInfo from './NextBillInfo';
import PlanUsage from './PlanUsage';
import * as styles from './index.module.scss';

type Props = {
  subscription: Subscription;
  subscriptionPlan: SubscriptionPlan;
  subscriptionUsage: SubscriptionUsage;
};

function CurrentPlan({ subscription, subscriptionPlan, subscriptionUsage }: Props) {
  const { name } = subscriptionPlan;

  return (
    <FormCard title="subscription.current_plan" description="subscription.current_plan_description">
      <div className={styles.planInfo}>
        <div className={styles.name}>
          <PlanName name={name} />
        </div>
        <PlanDescription planName={name} />
      </div>
      <FormField title="subscription.plan_usage">
        <PlanUsage
          currentSubscription={subscription}
          currentPlan={subscriptionPlan}
          subscriptionUsage={subscriptionUsage}
        />
      </FormField>
      <FormField title="subscription.next_bill">
        {/* Todo @xiaoyijun retrieve cost from subscription usage on the feature is ready in the backend */}
        <NextBillInfo cost={1000} />
      </FormField>
      <MauLimitExceedNotification
        activeUsers={subscriptionUsage.activeUsers}
        currentPlan={subscriptionPlan}
        className={styles.notification}
      />
    </FormCard>
  );
}

export default CurrentPlan;