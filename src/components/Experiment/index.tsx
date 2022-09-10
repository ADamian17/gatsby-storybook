import React, { useEffect, useState, useTransition } from 'react';

const Loading: React.FC = () => <div>...Loading</div>;

type ExperimentProps = {
  components: JSX.Element[];
};

const Experiment: React.FC<ExperimentProps> = ({ components }) => {
  const [component, setComponent] = useState<JSX.Element | null>(null);
  const [variant, setVariant] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();

  const waitForIt = (m = 2000) => new Promise((r) => setTimeout(r, m));

  useEffect(() => {
    getVariant();
  }, [variant]);

  const getVariant = async () => {
    try {
      await waitForIt();
      setVariant(0);
      startTransition(() => {
        setComponent(components[variant as number]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isPending ? <Loading /> : null}
      {component}
    </>
  );
};

export default Experiment;
