import React from "react";

const Successplan = () => {
  return (
    <div className="flex justify-center items-center mt-14 flex-col">
      <div className=" flex flex-col   justify-center items-start gap-7">
        {/* <div className=" flex justify-center item-center flex-row">
          <div className=" text-black text-center w-[50%] font-rubik font-medium text-[36px] md:text-[32px]">
            <p> A Plan to success at scale </p>
          </div>
          <div className="text-black w-[50%] font-rubik font-medium text-opacity-50 md:text-opacity-60 text-center md:text-[20px]">
            <p>
              Oval can help your team collaborate easily. So you will have more
              control and more support to run your company to work with your
              team.
            </p>
          </div>
        </div> */}
        <div className="flex justify-center items-center">
          <p className="text-xl lg:text-4xl  font-rubik font-bold ">
            A Plan to success at scale
          </p>
        </div>
        <div className="flex justify-center items-center  ">
          <p className="text-[10px] lg:text-2xl font-inter text-opacity-50 font-normal ">
            Your own customer success manager to help <br />
            onboard large team and create custom workflows.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row mt-10">
        <div className="flex justify-center items-center flex-col gap-10">
          <div className="flex flex-col w-[50%] justify-center items-start gap-5">
            <div className="flex justify-center flex-col w-full items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="61"
                viewBox="0 0 60 61"
                fill="none"
              >
                <path
                  d="M55.7812 24.0969C55.7821 23.6658 55.6976 23.2389 55.5326 22.8407C55.3677 22.4425 55.1256 22.0808 54.8203 21.7766L38.7211 5.67968C38.4164 5.37495 38.0547 5.13323 37.6565 4.96831C37.2584 4.80339 36.8317 4.71851 36.4008 4.71851C35.9699 4.71851 35.5431 4.80339 35.145 4.96831C34.7469 5.13323 34.3852 5.37495 34.0805 5.67968L27.3469 12.4133L13.6453 17.5531C13.1061 17.7549 12.6295 18.0951 12.2634 18.5394C11.8972 18.9837 11.6544 19.5165 11.5594 20.0844L6.1125 52.7656C6.07841 52.9673 6.08873 53.1741 6.14276 53.3714C6.1968 53.5687 6.29323 53.7519 6.42534 53.9081C6.55745 54.0643 6.72205 54.1898 6.90766 54.2758C7.09327 54.3619 7.29542 54.4064 7.5 54.4062C7.57849 54.4059 7.65684 54.3997 7.73438 54.3875L40.4156 48.9406C40.9839 48.8459 41.5172 48.6033 41.9619 48.2372C42.4067 47.871 42.7472 47.3942 42.9492 46.8547L48.0867 33.1531L54.8227 26.4172C55.1278 26.1129 55.3695 25.7512 55.5341 25.3529C55.6986 24.9547 55.7826 24.5278 55.7812 24.0969ZM40.3125 45.868C40.2837 45.9448 40.2352 46.0128 40.1718 46.065C40.1085 46.1173 40.0325 46.152 39.9516 46.1656L11.5992 50.8906L23.9906 38.4969C25.2619 39.281 26.7769 39.5709 28.2479 39.3115C29.7188 39.0521 31.0433 38.2615 31.9697 37.0899C32.8961 35.9182 33.3599 34.4471 33.2731 32.956C33.1862 31.4649 32.5548 30.0576 31.4986 29.0014C30.4424 27.9452 29.0351 27.3138 27.544 27.2269C26.0529 27.1401 24.5818 27.6039 23.4101 28.5303C22.2385 29.4567 21.4479 30.7812 21.1885 32.2521C20.9291 33.7231 21.219 35.2381 22.0031 36.5094L9.60938 48.9055L14.3367 20.5461C14.3505 20.4658 14.385 20.3905 14.4368 20.3276C14.4886 20.2648 14.5559 20.2165 14.632 20.1875L27.7711 15.2656L45.2344 32.7289L40.3125 45.868ZM23.9063 33.3125C23.9063 32.6635 24.0987 32.0291 24.4592 31.4895C24.8198 30.9499 25.3323 30.5294 25.9318 30.281C26.5314 30.0327 27.1911 29.9677 27.8276 30.0943C28.4641 30.2209 29.0488 30.5334 29.5077 30.9923C29.9666 31.4512 30.2791 32.0359 30.4057 32.6724C30.5323 33.3089 30.4673 33.9686 30.219 34.5682C29.9706 35.1677 29.5501 35.6802 29.0105 36.0408C28.4709 36.4013 27.8365 36.5937 27.1875 36.5937C26.3173 36.5937 25.4827 36.248 24.8673 35.6327C24.252 35.0173 23.9063 34.1827 23.9063 33.3125ZM52.8305 24.4297L46.875 30.3852L30.1125 13.625L36.0703 7.66718C36.1138 7.6236 36.1655 7.58902 36.2225 7.56543C36.2794 7.54184 36.3404 7.5297 36.402 7.5297C36.4636 7.5297 36.5246 7.54184 36.5815 7.56543C36.6384 7.58902 36.6901 7.6236 36.7336 7.66718L52.8305 23.7664C52.8741 23.8099 52.9086 23.8616 52.9322 23.9185C52.9558 23.9754 52.9679 24.0364 52.9679 24.098C52.9679 24.1596 52.9558 24.2206 52.9322 24.2775C52.9086 24.3344 52.8741 24.3861 52.8305 24.4297Z"
                  fill="#B3B1B7"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start gap-2">
              <p className="text-xl font-rubik font-bold ">
                Dedicated success manager
              </p>
              <p className="text-[12px] font-inter text-opacity-50 font-normal ">
                Your own customer success manager to help onboard large team and
                create custom workflows.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[50%] justify-center items-start gap-5">
            <div className="flex justify-center flex-col w-full items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="61"
                viewBox="0 0 60 61"
                fill="none"
              >
                <path
                  d="M45 23H50C51.3261 23 52.5978 23.5268 53.5355 24.4645C54.4732 25.4021 55 26.6739 55 28V55.5L45 45.5H30C28.6739 45.5 27.4021 44.9732 26.4645 44.0355C25.5268 43.0978 25 41.8261 25 40.5V38M35 23C35 24.3261 34.4732 25.5978 33.5355 26.5355C32.5978 27.4732 31.3261 28 30 28H15L5 38V10.5C5 7.75 7.25 5.5 10 5.5H30C31.3261 5.5 32.5978 6.02678 33.5355 6.96447C34.4732 7.90215 35 9.17392 35 10.5V23Z"
                  stroke="#B3B1B7"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start gap-2">
              <p className="text-xl font-rubik font-bold ">
                Dedicated success manager
              </p>
              <p className="text-[12px] font-inter text-opacity-50 font-normal ">
                Your own customer success manager to help onboard large team and
                create custom workflows.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[50%] justify-center items-start gap-5">
            <div className="flex justify-center flex-col w-full items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="61"
                viewBox="0 0 60 61"
                fill="none"
              >
                <g clip-path="url(#clip0_1_899)">
                  <path
                    d="M56.0333 29.7167C50.4166 19.3333 40.5666 13.05 29.6666 13.05C18.7666 13.05 8.89997 19.3333 3.3333 29.7167L2.86664 30.5L3.29997 31.3C8.91664 41.6833 18.7666 47.9667 29.6666 47.9667C40.5666 47.9667 50.4333 41.7667 56.0333 31.3L56.4666 30.5L56.0333 29.7167ZM29.6666 44.55C20.2833 44.55 11.6666 39.3167 6.66664 30.5C11.6666 21.6833 20.2833 16.45 29.6666 16.45C39.05 16.45 47.5666 21.7 52.65 30.5C47.5666 39.3167 39.0333 44.55 29.6666 44.55Z"
                    fill="#B3B1B7"
                  />
                  <path
                    d="M30.15 19.1166C27.8902 19.1331 25.686 19.8189 23.8157 21.0874C21.9454 22.3559 20.493 24.1502 19.6419 26.2437C18.7909 28.3372 18.5792 30.6359 19.0338 32.8496C19.4884 35.0633 20.5888 37.0926 22.1961 38.6812C23.8033 40.2698 25.8453 41.3465 28.0641 41.7753C30.2829 42.2041 32.579 41.9657 34.6624 41.0903C36.7459 40.2149 38.5231 38.7417 39.7698 36.8568C41.0164 34.9719 41.6765 32.7598 41.6667 30.5C41.6601 28.9957 41.3568 27.5075 40.7741 26.1207C40.1914 24.7338 39.3407 23.4756 38.2708 22.4181C37.201 21.3607 35.9329 20.5247 34.5394 19.9582C33.1459 19.3916 31.6543 19.1057 30.15 19.1166ZM30.15 38.65C28.5538 38.6335 26.998 38.1458 25.678 37.248C24.3581 36.3502 23.3328 35.0824 22.7311 33.6039C22.1293 32.1253 21.9778 30.5019 22.2957 28.9375C22.6136 27.3732 23.3866 25.9376 24.5176 24.8112C25.6487 23.6847 27.0874 22.9175 28.6531 22.6061C30.2187 22.2946 31.8415 22.4527 33.3176 23.0605C34.7937 23.6683 36.0572 24.6987 36.9496 26.0223C37.842 27.3459 38.3234 28.9037 38.3333 30.5C38.3378 31.5743 38.1289 32.6388 37.7188 33.6318C37.3087 34.6248 36.7056 35.5265 35.9444 36.2846C35.1831 37.0427 34.279 37.6422 33.2843 38.0482C32.2897 38.4543 31.2243 38.6588 30.15 38.65Z"
                    fill="#B3B1B7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_899">
                    <rect
                      width="60"
                      height="60"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col items-start gap-2">
              <p className="text-xl font-rubik font-bold ">
                Dedicated success manager
              </p>
              <p className="text-[12px] font-inter text-opacity-50 font-normal ">
                Your own customer success manager to help onboard large team and
                create custom workflows.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-10">
          <div className="flex flex-col w-[50%] justify-center items-start gap-5">
            <div className="flex justify-center flex-col w-full items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <g clip-path="url(#clip0_1_908)">
                  <path
                    d="M46.875 22.5647L20.1 22.5647L19.1297 18.2128C17.475 12.0384 20.3494 5.88281 26.9278 4.12031C33.4397 2.37563 39.1791 6.10875 40.8628 12.3891L41.6597 15.5512C41.9278 16.5516 42.9553 17.1449 43.9566 16.8768C44.9569 16.6087 45.5503 15.5812 45.2822 14.5809L44.4844 11.4187C42.2588 3.10775 34.5009 -1.79068 25.9575 0.497754C17.3813 2.79551 13.3181 11.0109 15.5081 19.184L16.2619 22.5646H13.125C8.98875 22.5646 5.625 25.9284 5.625 30.0646V52.5646C5.625 56.7009 8.98875 60.0646 13.125 60.0646H46.875C51.0112 60.0646 54.375 56.7009 54.375 52.5646V30.0646C54.375 25.9284 51.0112 22.5646 46.875 22.5646V22.5647ZM50.625 52.5647C50.625 54.6319 48.9422 56.3147 46.875 56.3147H13.125C11.0578 56.3147 9.375 54.6319 9.375 52.5647V30.0647C9.375 27.9975 11.0578 26.3147 13.125 26.3147H46.875C48.9422 26.3147 50.625 27.9975 50.625 30.0647V52.5647ZM30 33.8147C27.9291 33.8147 26.25 35.4938 26.25 37.5647C26.25 38.9494 27.0094 40.1447 28.125 40.7944V46.9397C28.125 47.9747 28.965 48.8147 30 48.8147C31.035 48.8147 31.875 47.9747 31.875 46.9397V40.7944C32.9906 40.1447 33.75 38.9484 33.75 37.5647C33.75 35.4938 32.0709 33.8147 30 33.8147Z"
                    fill="#B3B1B7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_908">
                    <rect width="60" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col items-start gap-2">
              <p className="text-xl font-rubik font-bold ">
                Dedicated success manager
              </p>
              <p className="text-[12px] font-inter text-opacity-50 font-normal ">
                Your own customer success manager to help onboard large team and
                create custom workflows.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[50%] justify-center items-start gap-5">
            <div className="flex justify-center flex-col w-full items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <g clip-path="url(#clip0_1_914)">
                  <path
                    d="M2.14285 30C2.14285 35.5096 3.77665 40.8955 6.83763 45.4766C9.89861 50.0577 14.2493 53.6282 19.3395 55.7367C24.4298 57.8451 30.0309 58.3968 35.4347 57.3219C40.8384 56.247 45.8021 53.5939 49.698 49.698C53.5939 45.8021 56.247 40.8384 57.3219 35.4347C58.3967 30.0309 57.8451 24.4298 55.7366 19.3395C53.6282 14.2493 50.0577 9.89863 45.4766 6.83765C40.8955 3.77666 35.5096 2.14287 30 2.14287C22.0199 2.13404 14.344 5.20438 8.57142 10.7143"
                    fill="white"
                  />
                  <path
                    d="M2.14285 30C2.14285 35.5096 3.77665 40.8955 6.83763 45.4766C9.89861 50.0577 14.2493 53.6282 19.3395 55.7367C24.4298 57.8451 30.0309 58.3968 35.4347 57.3219C40.8384 56.247 45.8021 53.5939 49.698 49.698C53.5939 45.8021 56.247 40.8384 57.3219 35.4347C58.3967 30.0309 57.8451 24.4298 55.7366 19.3395C53.6282 14.2493 50.0577 9.89863 45.4766 6.83765C40.8955 3.77666 35.5096 2.14287 30 2.14287C22.0199 2.13404 14.344 5.20438 8.57142 10.7143"
                    stroke="#B3B1B7"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.7143 2.14285L8.57143 10.7143L17.1429 12.8571M30 15V32.1429L18.8571 37.7143"
                    fill="white"
                  />
                  <path
                    d="M10.7143 2.14285L8.57143 10.7143L17.1429 12.8571M30 15V32.1429L18.8571 37.7143"
                    stroke="#B3B1B7"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_914">
                    <rect width="60" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col items-start gap-2">
              <p className="text-xl font-rubik font-bold ">
                Dedicated success manager
              </p>
              <p className="text-[12px] font-inter text-opacity-50 font-normal ">
                Your own customer success manager to help onboard large team and
                create custom workflows.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[50%] justify-center items-start gap-5">
            <div className="flex justify-center flex-col w-full items-items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M40 50V10H10V47.5C10 48.163 10.2634 48.7989 10.7322 49.2678C11.2011 49.7366 11.837 50 12.5 50H40ZM47.5 55H12.5C10.5109 55 8.60322 54.2098 7.1967 52.8033C5.79018 51.3968 5 49.4891 5 47.5V7.5C5 6.83696 5.26339 6.20107 5.73223 5.73223C6.20107 5.26339 6.83696 5 7.5 5H42.5C43.163 5 43.7989 5.26339 44.2678 5.73223C44.7366 6.20107 45 6.83696 45 7.5V25H55V47.5C55 49.4891 54.2098 51.3968 52.8033 52.8033C51.3968 54.2098 49.4891 55 47.5 55ZM45 30V47.5C45 48.163 45.2634 48.7989 45.7322 49.2678C46.2011 49.7366 46.837 50 47.5 50C48.163 50 48.7989 49.7366 49.2678 49.2678C49.7366 48.7989 50 48.163 50 47.5V30H45ZM15 15H30V30H15V15ZM20 20V25H25V20H20ZM15 32.5H35V37.5H15V32.5ZM15 40H35V45H15V40Z"
                  fill="#B3B1B7"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start gap-2">
              <p className="text-xl font-rubik font-bold ">
                Dedicated success manager
              </p>
              <p className="text-[12px] font-inter text-opacity-50 font-normal ">
                Your own customer success manager to help onboard large team and
                create custom workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-14">
        <div className="flex justify-center  sm:gap-[5%]  md:gap-[20%] lg:gap-[40%]">
          <div className="flex flex-col  justify-cente gap-5">
            <div className="flex flex-col items-center gap-2 px-8">
              <p className="text-5xl font-rubik font-bold ">98%</p>
              <p className="text-[12px] font-inter text-opacity-50 font-normal ">
                Of user saved time
              </p>
            </div>
          </div>
          <div className="flex flex-col  justify-center items-center gap-5">
            <div className="flex flex-col items-center gap-2 px-8">
              <p className="text-5xl font-rubik font-bold ">98%</p>
              <p className="text-[12px] font-inter text-opacity-50 font-normal ">
                Of user saved time
              </p>
            </div>
          </div>
          <div className="flex flex-col  justify-center  gap-5">
            <div className="flex flex-col items-center gap-2 px-8">
              <p className="text-5xl font-rubik font-bold ">98%</p>
              <p className="text-[12px] font-inter text-opacity-50 font-normal ">
                Of user saved time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Successplan;
