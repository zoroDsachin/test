document.addEventListener("DOMContentLoaded", () => {
  const admins = document.querySelectorAll(".admin");

  admins.forEach(admin => {
    admin.addEventListener("click", () => {
      admins.forEach(a => a.classList.remove("active"));
      admin.classList.add("active");
    });
  });
});
