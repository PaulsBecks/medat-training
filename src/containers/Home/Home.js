import React from "react";

import "./Home.css";
import { Icon, Button } from "../../components";

export default ({ setSelectedQuiz }) => (
  <div className="mt-de-home">
    <div className="mt-de-home-header">
      <div className="mt-de-home-header-content">
        <h1>Kostenlose Aufgaben für den Medizinertest in Österreich</h1>
        <p>
          Auf dieser Webseite findest du kostenlos Aufgaben für deine Medizin
          Aufnahmeprüfung. Aktuell kannst du Zahlenfolgen und vermischte Wörter
          üben.
          <br />
          <br />
          Wähle eine der Kategorien aus um mit den Aufagben zu beginnen oder
          scroll nach unten, um zu erfahren wie alles funktioniert.
        </p>
      </div>
      <div className="mt-de-home-header-icon">
        <Icon.Medical />
      </div>
    </div>
    <div className="mt-de-home-categories-section">
      <h2>Kategorien</h2>
      <div>
        <Button
          className="mt-de-home-words-button"
          onClick={() => setSelectedQuiz("words")}
        >
          Wörter
        </Button>
        <Button
          className="mt-de-home-sequences-button"
          onClick={() => setSelectedQuiz("sequence")}
        >
          Folgen
        </Button>
      </div>
    </div>
    {/*<div>
      <div>
        <h2>Endloser Aufgabenfluss</h2>
        <p>
          Auf aufgabenmed.at kann du so viele Aufgaben machen bis du deinen
          Mediziner Test bestanden hast. Es gibt keine Begrenzungen und keine
          Limits.
          <br />
          <br />
          Die Algorithmen auf dieser Seite generieren ständig neue Aufgaben
          damit du immer weiter üben kannst.
        </p>
      </div>
    </div>*/}
  </div>
);
