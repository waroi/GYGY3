export const toNaturalDateString = (dateString, locale, type) => {
  const date = new Date(dateString);

  switch (type) {
    case "short":
      const options = { dateStyle: "short" };
      return date.toLocaleDateString(locale, options);
    case "long":
      const formattedDateString = date.toLocaleDateString(locale, {
        dateStyle: "long",
      });
      const formattedWeekdayString = date.toLocaleDateString(locale, {
        weekday: "long",
      });
      return `${formattedDateString}, ${formattedWeekdayString}`;
    default:
      return date.toLocaleDateString(locale);
  }
};

export const toTimeString = (dateString, locale) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
  });
};
