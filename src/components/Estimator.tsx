"use client";
import { useMemo, useState } from "react";

export default function Estimator() {
  const [locators, setLocators] = useState(4);
  const [ticketsPerDay, setTicketsPerDay] = useState(35);
  const [minsSavedPerTicket, setMinsSavedPerTicket] = useState(1.5); // realistic with fast prints / indexes
  const [daysPerMonth, setDaysPerMonth] = useState(22);
  const [hourlyRate, setHourlyRate] = useState(28); // client can change

  const results = useMemo(() => {
    const minutesSavedPerDayPerLocator = ticketsPerDay * minsSavedPerTicket;
    const hoursSavedPerDayPerLocator = minutesSavedPerDayPerLocator / 60;
    const monthlyHoursSavedPerLocator = hoursSavedPerDayPerLocator * daysPerMonth;
    const teamHoursSavedPerMonth = monthlyHoursSavedPerLocator * locators;
    const monthlyDollarImpact = teamHoursSavedPerMonth * hourlyRate;
    const yearlyDollarImpact = monthlyDollarImpact * 12;

    return {
      teamHoursSavedPerMonth: round(teamHoursSavedPerMonth, 1),
      monthlyDollarImpact: round(monthlyDollarImpact, 0),
      yearlyDollarImpact: round(yearlyDollarImpact, 0),
    };
  }, [locators, ticketsPerDay, minsSavedPerTicket, daysPerMonth, hourlyRate]);

  function round(n: number, digits = 0) {
    const p = Math.pow(10, digits);
    return Math.round(n * p) / p;
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-[#003366]">ROI / Time-Saved Estimator</h3>
      <p className="text-sm text-gray-600 mt-1">
        Adjust the numbers to see potential savings from faster prints, better styling, and asset indexes.
      </p>

      {/* inputs */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <NumberInput label="Locators on the team" value={locators} setValue={setLocators} min={1} max={200} />
        <NumberInput label="Tickets per locator per day" value={ticketsPerDay} setValue={setTicketsPerDay} min={1} max={500} />
        <NumberInput label="Minutes saved per ticket" value={minsSavedPerTicket} setValue={setMinsSavedPerTicket} step={0.5} min={0} max={30} />
        <NumberInput label="Work days per month" value={daysPerMonth} setValue={setDaysPerMonth} min={1} max={31} />
        <NumberInput label="Locator hourly rate ($)" value={hourlyRate} setValue={setHourlyRate} step={1} min={10} max={200} />
      </div>

      {/* results */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <Stat label="Team hours saved / month" value={`${results.teamHoursSavedPerMonth} hrs`} />
        <Stat label="Estimated monthly impact" value={`$${results.monthlyDollarImpact.toLocaleString()}`} />
        <Stat label="Estimated yearly impact" value={`$${results.yearlyDollarImpact.toLocaleString()}`} />
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Estimates only. Actual results depend on data quality, crew size, and workflows. Model assumes improvements like
        instant-loading maps, locator-friendly styling, and asset/pad indexes.
      </p>
    </div>
  );
}

function NumberInput({
  label,
  value,
  setValue,
  step = 1,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
}: {
  label: string;
  value: number;
  setValue: (n: number) => void;
  step?: number;
  min?: number;
  max?: number;
}) {
  return (
    <label className="text-sm text-gray-700">
      {label}
      <input
        type="number"
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ecc71]"
      />
    </label>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-gray-50 border p-4 text-center">
      <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
      <div className="text-2xl font-semibold mt-1 text-[#003366]">{value}</div>
    </div>
  );
}
