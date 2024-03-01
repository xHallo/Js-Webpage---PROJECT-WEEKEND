const formEl = document.querySelector("form");
      const tbodyEl = document.querySelector("tbody");
      const tableEl = document.querySelector("table");
      function onAdd(e) {
        e.preventDefault();
        const situps = document.getElementById("situps").value;
        const pushups = document.getElementById("pushups").value;
        const runmin = document.getElementById("runmin").value;
        const runsec = document.getElementById("runsec").value;
        const date = document.getElementById("date").value;
        tbodyEl.innerHTML += `
            <tr>
                <td>${pushups}</td>
                <td>${situps}</td>
                <td>${runmin}m ${runsec}s</td>
                <td>${date}</td>
                <td><button class="deleteBtn">Delete</button></td>
            </tr>
        `;
        localStorage.setItem("progress",tbodyEl.innerHTML);
      }


      function onDeleteRow(e) {
        if (!e.target.classList.contains("deleteBtn")) {
          return;
        }

        const btn = e.target;
        btn.closest("tr").remove();
        localStorage.setItem("progress",tbodyEl.innerHTML);
      }
      let saved = localStorage.getItem('progress');
      if (saved) {
        tbodyEl.innerHTML = saved;}
      formEl.addEventListener("submit", onAdd);
      tableEl.addEventListener("click", onDeleteRow);

