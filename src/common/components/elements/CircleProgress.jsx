import { Heat } from '@alptugidin/react-circular-progress-bar';

const SimpleHeat = () => {
  return (
    <div>
      <Heat
        progress={75}
        text={'Lorem ipsum'}
        sx={{
          bgColor: '#ffffff',
          barWidth: 5
        }}
      />
    </div>
  );
};

export default SimpleHeat;
