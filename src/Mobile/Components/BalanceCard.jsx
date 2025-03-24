import { CardButton, MobileTypography,ButtonContainer } from "../../Components/Styled"
import "../../styles/BalanceCard.css"
import PropTypes from "prop-types";

const BalanceCard = ({balance}) => {

  const checkDecimal = balance % 1 !==0
  const numberFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD',maximumFractionDigits: checkDecimal ? 2 : 0  }).format(balance);



  return (
    <div
    style={{
      display: "flex",
      gap: "1.8rem",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: '250px'
    }}
    >
      <MobileTypography
      sx={{
        fontSize: '36px',
        fontWeight: '700',
        lineHeight: '43.57px',
        textAlign: 'left',
        color: '#000000'
      }}
      >{numberFormat}</MobileTypography>
      
      <div className="form-box">
        <div className="button-box">
          <div id="btn"></div>
          <button type="button" className="toggle-btn" onClick="leftClick()">fund</button>
          <button type="button" className="toggle-btn" onClick="rightClick()">investment</button>
          </div>
        </div>
        <ButtonContainer >
          <CardButton>Deposit</CardButton>
          <CardButton>Withdraw</CardButton>
        </ButtonContainer>
    </div>
  )
}

export default BalanceCard
BalanceCard.propTypes ={
  balance: PropTypes.number.isRequired
}
