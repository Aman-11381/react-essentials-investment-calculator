export default function UserInput({ userInput, onUserInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              onUserInputChange("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) =>
              onUserInputChange("annualInvestment", event.target.value)
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) =>
              onUserInputChange("expectedReturn", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) =>
              onUserInputChange("duration", event.target.value)
            }
            required
          />
        </p>
      </div>
    </section>
  );
}
