const colorCategory = (color) => {
  switch (color) {
    case "Personal":
      return "bg-red-500";
    case "Trabajo":
      return "bg-blue-700";
    case "Deporte":
      return "bg-orange-400";
    case "Estudios":
      return "bg-green-500";
    case "Entretenimiento":
      return "bg-pink-500";
    default:
      return "bg-white/55";
  }
};

export { colorCategory };
