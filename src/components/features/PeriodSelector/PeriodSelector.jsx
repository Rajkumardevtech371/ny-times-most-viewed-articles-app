import { PeriodButton } from "../../ui/PeriodButton";
import { SectionTitle } from "../../ui/SectionTitle";

const PeriodSelector = ({ period, onPeriodChange, disabled }) => {
  const periods = [
    { value: 1, label: "1 Day" },
    { value: 7, label: "7 Days" },
    { value: 30, label: "30 Days" },
  ];

  return (
    <div className="mb-8 px-4 sm:px-0">
      <SectionTitle>Time Period</SectionTitle>

      <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-1 rounded overflow-hidden">
        {periods.map((p) => (
          <PeriodButton
            key={p.value}
            active={period === p.value}
            disabled={disabled}
            label={p.label}
            onClick={() => onPeriodChange(p.value)}
            testId={`period-${p.value}-btn`}
          />
        ))}
      </div>
    </div>
  );
};

export default PeriodSelector;
