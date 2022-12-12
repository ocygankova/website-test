import { PageHeading } from 'components';
import variables from 'styles/variables.module.scss';

function Pricing() {
  return (
    <>
      <PageHeading
        title="Simple Pricing"
        description="Share your idea and we will set up the team that will take it off the ground"
        bgColor={variables.colorBgHighlighted}
        textColor={variables.colorDark}
      />
    </>
  );
}

export default Pricing;
