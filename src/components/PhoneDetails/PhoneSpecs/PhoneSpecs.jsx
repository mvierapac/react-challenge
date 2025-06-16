import "./PhoneSpecs.css";

export const PhoneSpecs = ({ specs }) => {
  return (
    <section className="phone-specs">
      <h2 className="phone-specs__title">SPECIFICATIONS</h2>
      <table className="phone-specs__table">
        <tbody>
          {Object.entries(specs).map(([key, value]) => (
            <tr key={key}>
              <th className="phone-specs__label">
                {key.replace(/([A-Z])/g, " $1").toUpperCase()}
              </th>
              <td className="phone-specs__value">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
