let display = document.getElementById("display") as HTMLElement;

function append(value: string): void {
  if (display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay(): void {
  display.textContent = "0";
}

function deleteLast(): void {
  if (display.textContent && display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = "0";
  }
}

function calculate(): void {
  try {
    const result = eval(display.textContent ?? "0");
    display.textContent = result.toString();
  } catch {
    display.textContent = "Error";
  }
}

// Exportar las funciones al navegador
(window as any).append = append;
(window as any).clearDisplay = clearDisplay;
(window as any).deleteLast = deleteLast;
(window as any).calculate = calculate;
