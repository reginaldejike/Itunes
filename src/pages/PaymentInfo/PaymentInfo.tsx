import AtmCard from "../../assets/images/atm.svg";
import {
  Controller,
  FieldError,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import "./PaymentInfo.scss";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Product } from "../../type/type";
import ProductCard from "../../component/ProductCard/ProductCard";
import OtpDialog from "../../component/OtpDialogue/OtpDialogue";

interface Card {
  cardNum: number;
  expiryDate: Date;
  cvv: number;
  cardStatus: string;
  delivery: string;
  address: string;
  state: string;
  phoneNumber: number;
}

interface Props {
  total: () => number;
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const PaymentInfo = () => {
  const [selectedCard, setSelectedCard] = useState<string>("Verve");
  const [selectDelivery, setSelectDelivery] = useState<string>("pickup");
  const [dialogVisible, setDialogVisible] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors, isSubmitting },
  } = useForm<Card>();

  const { total, cart, setCart } = useOutletContext<Props>();

  const onSubmit: SubmitHandler<Card> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      setDialogVisible(true);
      throw new Error();
    } catch (error) {
      setError("root", {
        message: "This email has already been taken",
      });
    }
  };

  const handleCardChange = (
    cardType: string,
    onChange: (value: string) => void
  ) => {
    setSelectedCard(cardType);
    onChange(cardType);
  };
  const handleDeliveryChange = (
    cardType: string,
    onChange: (value: string) => void
  ) => {
    setSelectDelivery(cardType);
    onChange(cardType);
  };

  const closeDialog = () => {
    setDialogVisible(false);
  };

  return (
    <>
      <div className="payment-info">
        <div className="payment-info-content">
          <h3>Payment Info</h3>
          {}
          {dialogVisible ? <div className="loading">Please wait</div> : ""}
          {success ? <div className="success">Payment successful</div> : ""}

          <div className="payment-info-content-body">
            <form onSubmit={handleSubmit(onSubmit)} className="form-container">
              <div className="form-body">
                <img src={AtmCard} alt="atm-card" className="card-img" />
                <div className="form-control">
                  <label htmlFor="cardNum">Card Number</label>
                  <input
                    type="number"
                    id="cardNum"
                    className="card-num"
                    {...register("cardNum", {
                      required: "Card Number is required",
                      // pattern: {
                      //   value:
                      //     /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/,
                      //   message: "Invalid card number",
                      // },
                    })}
                  />
                  {errors.cardNum && (
                    <div className="error">{errors.cardNum.message}</div>
                  )}
                </div>
                <div className="expiry-cvv">
                  <div className="form-control">
                    <label htmlFor="expiry-date">Expiry Date</label>
                    <input
                      type="date"
                      id="expiryDate"
                      className="card-num"
                      {...register("expiryDate", {
                        required: "Expiry Date is required",
                        // pattern: {
                        //   value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                        //   message: "01/01/1900",
                        // },
                      })}
                    />
                    {errors.expiryDate && (
                      <div className="error">{errors.expiryDate.message}</div>
                    )}
                  </div>
                  <div className="form-control">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="number"
                      id="cvv"
                      className="card-num"
                      {...register("cvv", {
                        required: "CVV is required",
                        pattern: {
                          value: /^[0-9]{3,4}$/,
                          message: "Invalid CVV",
                        },
                      })}
                    />
                    {errors.cvv && (
                      <div className="error">{errors.cvv.message}</div>
                    )}
                  </div>
                </div>
                <div className="check-box-section">
                  <h3>Type of Card</h3>
                  <div className="check-control">
                    <Controller
                      name="cardStatus"
                      control={control}
                      defaultValue={selectedCard}
                      rules={{
                        required: "At least one card type must be selected",
                      }}
                      render={({ field: { onChange, value } }) => (
                        <>
                          <div className="check-box">
                            <label htmlFor="verve">Verve</label>
                            <input
                              type="checkbox"
                              checked={value === "Verve"}
                              onChange={() =>
                                handleCardChange("Verve", onChange)
                              }
                              className="check"
                            />
                          </div>
                          <div className="check-box">
                            <label htmlFor="visa">Visa</label>
                            <input
                              type="checkbox"
                              checked={value === "Visa"}
                              onChange={() =>
                                handleCardChange("Visa", onChange)
                              }
                              className="check"
                            />
                          </div>
                        </>
                      )}
                    />
                  </div>
                </div>
                {errors.cardStatus && (
                  <p className="error">
                    {(errors.cardStatus as FieldError).message}
                  </p>
                )}
              </div>
              <div className="form-body">
                <div className="check-box-section">
                  <h3>Delivery Method</h3>
                  <div className="check-control">
                    <Controller
                      name="delivery"
                      control={control}
                      defaultValue={selectDelivery}
                      rules={{
                        required: "At least one card type must be selected",
                      }}
                      render={({ field: { onChange, value } }) => (
                        <>
                          <div className="check-box">
                            <label htmlFor="pickup">Pick Up</label>
                            <input
                              type="checkbox"
                              checked={value === "pickup"}
                              onChange={() =>
                                handleDeliveryChange("pickup", onChange)
                              }
                              className="check"
                            />
                          </div>
                          <div className="check-box">
                            <label htmlFor="delivery">Delivery</label>
                            <input
                              type="checkbox"
                              checked={value === "delivery"}
                              onChange={() =>
                                handleDeliveryChange("delivery", onChange)
                              }
                              className="check"
                            />
                          </div>
                        </>
                      )}
                    />
                  </div>
                </div>
                {errors.delivery && (
                  <p className="error">
                    {(errors.delivery as FieldError).message}
                  </p>
                )}
                <div className="form-control">
                  <label htmlFor="address">Residence Address</label>
                  <input
                    type="text"
                    id="address"
                    className="card-num"
                    {...register("address", {
                      required: "Card Number is required",
                      pattern: {
                        value: /^[a-zA-Z0-9\s,.'-]{1,100}$/,
                        message:
                          "Invalid address, only letters, numbers, spaces, and ,.'- are allowed",
                      },
                    })}
                  />
                  {errors.address && (
                    <div className="error">{errors.address.message}</div>
                  )}
                </div>

                <div className="form-control">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    className="card-num"
                    {...register("state", {
                      required: "State is required",
                      pattern: {
                        value: /^[a-zA-Z\s]+$/,
                        message:
                          "Invalid state, only letters and spaces are allowed",
                      },
                    })}
                  />
                  {errors.state && (
                    <div className="error">{errors.state.message}</div>
                  )}
                </div>
                <div className="form-control">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    className="card-num"
                    {...register("phoneNumber", {
                      required: "Phone Number is required",
                      pattern: {
                        value: /^\+?[0-9\s.-]{7,15}$/,
                        message: "Invalid phone number, must be a valid format",
                      },
                    })}
                  />
                  {errors.phoneNumber && (
                    <div className="error">{errors.phoneNumber.message}</div>
                  )}
                </div>
              </div>
              <button disabled={isSubmitting} className="check-out-btn">
                {isSubmitting ? "Loading.." : `NGN ${""}${total()}`}
              </button>
            </form>
            <div className="cart-section">
              {cart.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
        {/* <dialog open>
          <form>
            <p>
              To proceed, you need to confirm the payment by entering the OTP
              received on your registered mobile number with the debit card.
            </p>
            <div className="input-span">
              <input type="number" name="" id="" />
              <input type="number" name="" id="" />
              <input type="number" name="" id="" />
              <input type="number" name="" id="" />
            </div>
            <button>Verify</button>
          </form>
        </dialog> */}
        <OtpDialog
          visible={dialogVisible}
          onClose={closeDialog}
          setSuccess={setSuccess}
          setCart={setCart}
        />
      </div>
    </>
  );
};

export default PaymentInfo;
