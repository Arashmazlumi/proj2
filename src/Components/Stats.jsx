function Stats() {

  const stats = [
    {
      title: "Users",
      value: "12,540",
      icon: "👥"
    },
    {
      title: "Products",
      value: "1,245",
      icon: "📦"
    },
    {
      title: "Orders",
      value: "8,420",
      icon: "🛒"
    },
    {
      title: "Revenue",
      value: "$42,500",
      icon: "💰"
    }
  ];

  return (
    <section className="stats">

      {stats.map((item) => (

        <div className="stat-card" key={item.title}>

          <div className="stat-icon">
            {item.icon}
          </div>

          <div>
            <p>{item.title}</p>
            <h2>{item.value}</h2>
          </div>

        </div>

      ))}

    </section>
  );
}

export default Stats;