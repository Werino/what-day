window.onload = function () {
  const favicon = window.document.querySelector("link[rel*='icon']");

  favicon.href = `  data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3e%3crect width='16' height='16' rx='4' fill='black'%3e%3c/rect%3e%3ctext x='5.5' y='11.5' fill='white' style='font-size: 10'%3e${new Date()
    .toLocaleString("en-us", { weekday: "short" })
    .substring(0, 1)}%3c/text%3e%3c/svg%3e`;

  window.document.getElementsByTagName("head")[0].appendChild(favicon);
};
