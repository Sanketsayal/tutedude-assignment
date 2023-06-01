

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
        <i class="fa-solid fa-book-open"></i> Tute Dude
        </div>
        <div className="header-right">
          <p>My Assignments</p>
          <p>Chat with Mentor</p>
          <p><i class="fa-solid fa-circle-user"></i> ProfileName <i class="fa-solid fa-chevron-down"></i></p>
        </div>
      </header>

      <div className="page-nav">
        UI/UX &gt; Refer and Earn
      </div>

      <div className="page-content">

        <div className="earning-details">
          <div className="money-details">
            <div>
              <p>Referral Earnings</p>
              <h1>$ 2500</h1>
            </div>
            <div>
              <p>Total Referrals</p>
              <h1>7</h1>
            </div>
            <div>
              <p>Wallet Balance</p>
              <h1>$ 500</h1>
            </div>
          </div>
          <div className="btn">
            Withdraw Balance
          </div>
        </div>

        <div className="referral">
          <h2>Your Referral Code</h2>
          <div className="outer">
            <div className="ref-code">
              <h3>E</h3>
              <h3>E</h3>
              <h3>E</h3>
              <h3>E</h3>
              <h3>E</h3>
              <h3>E</h3>
            </div>
          </div>
          
        </div>
      </div>

      <div className="steps">
        <h1>How does it work ?</h1>
        <div className="steps-container">
          <div className="step-item">
            <div className="img">
              <div className="img-item">
                <i class="fa-solid fa-users"></i>
              </div>
            </div>
            <div className="detail">
              <h3>Invite Your Friends</h3>
              <p>Share the link tutedude.com with your Friends</p>
            </div>
          </div>
          <div className="step-item">
            <div className="img">
              <div className="img-item">
                <i class="fa-solid fa-tag"></i>
              </div>
            </div>
            <div className="detail">
              <h3>Friend Purchase any course</h3>
              <p>Using Your Referral code in the payments page</p>
            </div>
          </div>
          <div className="step-item">
            <div className="img">
              <div className="img-item">
                <i class="fa-solid fa-indian-rupee-sign"></i>
              </div>
            </div>
            <div className="detail">
              <h3>You get $200 as referral money</h3>
              <p>on total puchase the friend makes,into your Wallet</p>
            </div>
          </div>
          <div className="step-item">
            <div className="img">
              <div className="img-item">
                <i class="fa-solid fa-percent"></i>
              </div>
            </div>
            <div className="detail">
              <h3>Your friend gets $200 off</h3>
              <p>on his overall fee on successful purchase using your referal code</p>
            </div>
          </div>
          <div className="step-item">
            <div className="img">
              <div className="img-item">
                <i class="fa-solid fa-wallet"></i>
              </div>
            </div>
            <div className="detail">
              <h3>Transform money from wallet</h3>
              <p>when the wallet balance reaches $200 or more you can withdraw it</p>
            </div>
          </div>
        </div>
      </div>
      <div className="end">
        <h4>Friends who enrolled</h4>
        <h4>Terms and conditions</h4>
      </div>

    </div>
  );
}

export default App;
