let currentProgress = 0;
      const fullCourse = 373;
      
      document.getElementById("submitBtn").onclick = function () {
        currentProgress = Number(document.getElementById("inputUser").value);
        progressPercent = ((currentProgress * 100) / 373).toFixed(2);
        document.getElementById("result").textContent = `${progressPercent} %`;
        document.getElementById("extra").textContent = "is done";
      };
