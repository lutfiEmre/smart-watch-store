

const Footer = () => {
    return (
        <div className="flex flex-row py-[48px] px-[80px] gap-[32px] mt-[112px] w-full">
            <div className={'flex flex-col gap-[24px]'}>
                <h6 className={'playfairregular text-[30px] text-darkblue'}>
                    Luxe
                </h6>
                <ul className={'worksansregular flex flex-col text-[14px] gap-[16px] text-gray'}>
                    <li>
                        Copyright © 2021 Luxe
                    </li>
                    <li>
                        All rights reserved
                    </li>
                </ul>
                <div className={'mt-[31px] flex flex-row gap-[16px]'}>
                    <div
                        className={'bg-[#1F2937] cursor-pointer select-none bg-opacity-50 w-[32px] h-[32px] rounded-full flex justify-center items-center'}>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M9.00093 0.233398C6.68339 0.233398 6.39255 0.243215 5.48232 0.283343C4.57386 0.323644 3.95377 0.462973 3.41118 0.667403C2.84993 0.87855 2.37384 1.161 1.89952 1.62066C1.42485 2.08016 1.13329 2.54137 0.914624 3.08491C0.703066 3.61071 0.559065 4.2116 0.518175 5.09132C0.477464 5.97311 0.466797 6.25504 0.466797 8.50015C0.466797 10.7453 0.477108 11.0262 0.518353 11.9079C0.560131 12.788 0.703955 13.3887 0.914802 13.9144C1.13294 14.4581 1.4245 14.9193 1.89899 15.3788C2.37313 15.8386 2.84922 16.1218 3.41012 16.3329C3.95306 16.5373 4.57333 16.6767 5.4816 16.717C6.39184 16.7571 6.68251 16.7669 8.99986 16.7669C11.3176 16.7669 11.6075 16.7571 12.5178 16.717C13.4262 16.6767 14.047 16.5373 14.59 16.3329C15.151 16.1218 15.6264 15.8386 16.1006 15.3788C16.5752 14.9193 16.8668 14.4581 17.0855 13.9145C17.2952 13.3887 17.4392 12.7878 17.4819 11.9081C17.5228 11.0263 17.5335 10.7453 17.5335 8.50015C17.5335 6.25504 17.5228 5.97328 17.4819 5.09149C17.4392 4.21143 17.2952 3.61071 17.0855 3.08508C16.8668 2.54137 16.5752 2.08016 16.1006 1.62066C15.6259 1.16082 15.1512 0.878377 14.5894 0.667403C14.0454 0.462973 13.425 0.323644 12.5165 0.283343C11.6063 0.243215 11.3165 0.233398 8.99826 0.233398H9.00093ZM8.23537 1.72311C8.46258 1.72277 8.71609 1.72311 9.00089 1.72311C11.2793 1.72311 11.5494 1.73104 12.4491 1.77065C13.2811 1.8075 13.7327 1.94218 14.0335 2.05533C14.4317 2.20517 14.7156 2.38428 15.0141 2.67362C15.3128 2.96295 15.4977 3.23851 15.6527 3.62429C15.7695 3.91535 15.9087 4.3528 15.9466 5.15881C15.9875 6.03026 15.9963 6.29205 15.9963 8.49823C15.9963 10.7044 15.9875 10.9662 15.9466 11.8377C15.9085 12.6437 15.7695 13.0811 15.6527 13.3722C15.498 13.758 15.3128 14.0327 15.0141 14.3218C14.7154 14.6112 14.4319 14.7903 14.0335 14.9401C13.733 15.0538 13.2811 15.1881 12.4491 15.225C11.5495 15.2646 11.2793 15.2732 9.00089 15.2732C6.72229 15.2732 6.45224 15.2646 5.55268 15.225C4.72067 15.1878 4.26911 15.0531 3.96813 14.9399C3.5699 14.7901 3.28546 14.611 2.98679 14.3216C2.68812 14.0323 2.50323 13.7574 2.3482 13.3715C2.2314 13.0804 2.0922 12.643 2.05433 11.837C2.01344 10.9655 2.00527 10.7037 2.00527 8.49617C2.00527 6.2886 2.01344 6.0282 2.05433 5.15674C2.09238 4.35074 2.2314 3.91329 2.3482 3.62188C2.50287 3.2361 2.68812 2.96054 2.98679 2.67121C3.28546 2.38187 3.5699 2.20276 3.96813 2.05258C4.26893 1.93891 4.72067 1.80457 5.55268 1.76755C6.33989 1.7331 6.64496 1.72277 8.23537 1.72105V1.72311ZM13.556 3.09574C12.9906 3.09574 12.532 3.53956 12.532 4.08741C12.532 4.63508 12.9906 5.07942 13.556 5.07942C14.1213 5.07942 14.58 4.63508 14.58 4.08741C14.58 3.53974 14.1213 3.09574 13.556 3.09574ZM9.00095 4.25481C6.58083 4.25481 4.61868 6.15564 4.61868 8.50013C4.61868 10.8446 6.58083 12.7446 9.00095 12.7446C11.4211 12.7446 13.3825 10.8446 13.3825 8.50013C13.3825 6.15564 11.4211 4.25481 9.00095 4.25481ZM9.00091 5.74454C10.5718 5.74454 11.8454 6.97819 11.8454 8.50013C11.8454 10.0219 10.5718 11.2557 9.00091 11.2557C7.42987 11.2557 6.15644 10.0219 6.15644 8.50013C6.15644 6.97819 7.42987 5.74454 9.00091 5.74454Z"
                                  fill="white"/>
                        </svg>

                    </div>
                    <div
                        className={'bg-[#1F2937] cursor-pointer select-none bg-opacity-50 w-[32px] h-[32px] rounded-full flex justify-center items-center'}>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M17.5335 8.4886C17.5335 9.04766 17.4747 9.60594 17.3593 10.1501C17.2468 10.6814 17.0801 11.203 16.8618 11.7016C16.6485 12.1914 16.3839 12.6634 16.0747 13.1035C15.7701 13.5409 15.4192 13.9512 15.0338 14.3253C14.6475 14.6977 14.2225 15.0367 13.7712 15.333C13.3154 15.6304 12.8275 15.8864 12.3216 16.094C11.8061 16.3044 11.2665 16.4657 10.7186 16.5745C10.1561 16.6866 9.57767 16.7438 8.99975 16.7438C8.42139 16.7438 7.84303 16.6866 7.28133 16.5745C6.73257 16.4657 6.19295 16.3044 5.67792 16.094C5.17207 15.8864 4.68369 15.6304 4.22784 15.333C3.77657 15.0367 3.35155 14.6977 2.96611 14.3253C2.58027 13.9512 2.2294 13.5409 1.92439 13.1035C1.61687 12.6634 1.35184 12.1913 1.13768 11.7016C0.919305 11.203 0.752236 10.6814 0.63931 10.1501C0.525147 9.60594 0.466797 9.04766 0.466797 8.4886C0.466797 7.92913 0.525114 7.36965 0.639343 6.82665C0.75227 6.29538 0.919338 5.77299 1.13771 5.27519C1.35187 4.78505 1.6169 4.31265 1.92442 3.87246C2.22943 3.43473 2.5803 3.02517 2.96614 2.65069C3.35158 2.27823 3.7766 1.94007 4.22787 1.64421C4.68372 1.3455 5.1721 1.08958 5.67795 0.881567C6.19298 0.670713 6.73257 0.509099 7.28137 0.401087C7.84306 0.289844 8.42142 0.233398 8.99978 0.233398C9.57771 0.233398 10.1561 0.289844 10.7186 0.401087C11.2665 0.509131 11.8061 0.670745 12.3216 0.881567C12.8275 1.08955 13.3154 1.3455 13.7713 1.64421C14.2225 1.94007 14.6476 2.27823 15.0338 2.65069C15.4193 3.02517 15.7701 3.43473 16.0747 3.87246C16.3839 4.31265 16.6485 4.78508 16.8618 5.27519C17.0801 5.77299 17.2468 6.29538 17.3593 6.82665C17.4747 7.36965 17.5335 7.92913 17.5335 8.4886ZM5.89038 2.11217C3.85817 3.0405 2.34143 4.85195 1.86848 7.03507C2.0606 7.03668 5.09742 7.07377 8.59634 6.17446C7.33505 4.00666 5.98748 2.23757 5.89038 2.11217ZM9.20012 7.26001C5.44786 8.34669 1.84724 8.2685 1.71808 8.26369C1.71597 8.33945 1.71223 8.4128 1.71223 8.4886C1.71223 10.2996 2.41851 11.9507 3.57941 13.1991C3.5769 13.1954 5.5712 9.77282 9.50389 8.54262C9.59888 8.51199 9.69558 8.48456 9.7914 8.45797C9.6085 8.05732 9.40887 7.65584 9.20012 7.26001ZM13.8125 3.1977C12.5295 2.10329 10.8448 1.43946 8.99972 1.43946C8.4076 1.43946 7.83298 1.50879 7.28254 1.63697C7.3917 1.77887 8.76054 3.53549 10.0068 5.74921C12.7566 4.75199 13.7945 3.22348 13.8125 3.1977ZM10.2882 9.6261C10.2719 9.63131 10.2557 9.6358 10.2398 9.64142C5.94009 11.0914 4.53595 14.0136 4.52076 14.0455C5.75793 14.9762 7.30968 15.5377 8.99977 15.5377C10.009 15.5377 10.9703 15.339 11.8449 14.9791C11.737 14.3632 11.3136 12.2042 10.2882 9.6261ZM13.072 14.3349C14.7083 13.2668 15.8705 11.5706 16.1946 9.60591C16.0446 9.55916 14.0058 8.93477 11.6536 9.29958C12.6095 11.8407 12.9978 13.9101 13.072 14.3349ZM10.5678 6.79966C10.7369 7.13585 10.9007 7.47801 11.0519 7.82188C11.1057 7.94524 11.1582 8.06618 11.2095 8.18708C13.7129 7.88233 16.1793 8.39506 16.2847 8.41599C16.2681 6.74483 15.6501 5.21108 14.6276 4.01032C14.6138 4.02922 13.445 5.66294 10.5678 6.79966Z"
                                  fill="white"/>
                        </svg>


                    </div>
                    <div
                        className={'bg-[#1F2937] cursor-pointer select-none bg-opacity-50 w-[32px] h-[32px] rounded-full flex justify-center items-center'}>
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M7.5208 3.59864L7.55438 4.13498L6.99479 4.0693C4.95791 3.81755 3.17843 2.9638 1.66756 1.52992L0.928909 0.818458L0.73865 1.34385C0.33575 2.51503 0.593158 3.75188 1.43253 4.58375C1.8802 5.04346 1.77948 5.10914 1.00725 4.8355C0.73865 4.74793 0.503625 4.68226 0.481242 4.71509C0.4029 4.79171 0.6715 5.78776 0.884142 6.18181C1.17513 6.72909 1.76828 7.26542 2.4174 7.58284L2.96579 7.83459L2.31668 7.84554C1.68994 7.84554 1.66756 7.85648 1.73471 8.08634C1.95854 8.79781 2.84268 9.55305 3.82755 9.88142L4.52143 10.1113L3.91708 10.4615C3.02175 10.965 1.96973 11.2496 0.917717 11.2715C0.414092 11.2825 0 11.3262 0 11.3591C0 11.4685 1.36538 12.0815 2.15999 12.3223C4.54382 13.0338 7.37531 12.7273 9.50173 11.5123C11.0126 10.6476 12.5235 8.92915 13.2286 7.26542C13.6091 6.37883 13.9896 4.75888 13.9896 3.98174C13.9896 3.47824 14.0232 3.41257 14.6499 2.81056C15.0192 2.4603 15.3662 2.0772 15.4333 1.96775C15.5452 1.75978 15.534 1.75978 14.9633 1.94586C14.012 2.27422 13.8777 2.23044 14.3477 1.73789C14.6947 1.38763 15.1088 0.752784 15.1088 0.566709C15.1088 0.533872 14.9409 0.5886 14.7506 0.68711C14.5492 0.796566 14.1015 0.96075 13.7658 1.05926L13.1614 1.24534L12.613 0.884131C12.3108 0.68711 11.8856 0.468198 11.6617 0.402524C11.0909 0.249286 10.218 0.271177 9.70318 0.446307C8.30422 0.938859 7.42008 2.20855 7.5208 3.59864Z"
                                  fill="white"/>
                        </svg>


                    </div>
                    <div
                        className={'bg-[#1F2937] cursor-pointer select-none bg-opacity-50 w-[32px] h-[32px] rounded-full flex justify-center items-center'}>
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M7.5208 3.59864L7.55438 4.13498L6.99479 4.0693C4.95791 3.81755 3.17843 2.9638 1.66756 1.52992L0.928909 0.818458L0.73865 1.34385C0.33575 2.51503 0.593158 3.75188 1.43253 4.58375C1.8802 5.04346 1.77948 5.10914 1.00725 4.8355C0.73865 4.74793 0.503625 4.68226 0.481242 4.71509C0.4029 4.79171 0.6715 5.78776 0.884142 6.18181C1.17513 6.72909 1.76828 7.26542 2.4174 7.58284L2.96579 7.83459L2.31668 7.84554C1.68994 7.84554 1.66756 7.85648 1.73471 8.08634C1.95854 8.79781 2.84268 9.55305 3.82755 9.88142L4.52143 10.1113L3.91708 10.4615C3.02175 10.965 1.96973 11.2496 0.917717 11.2715C0.414092 11.2825 0 11.3262 0 11.3591C0 11.4685 1.36538 12.0815 2.15999 12.3223C4.54382 13.0338 7.37531 12.7273 9.50173 11.5123C11.0126 10.6476 12.5235 8.92915 13.2286 7.26542C13.6091 6.37883 13.9896 4.75888 13.9896 3.98174C13.9896 3.47824 14.0232 3.41257 14.6499 2.81056C15.0192 2.4603 15.3662 2.0772 15.4333 1.96775C15.5452 1.75978 15.534 1.75978 14.9633 1.94586C14.012 2.27422 13.8777 2.23044 14.3477 1.73789C14.6947 1.38763 15.1088 0.752784 15.1088 0.566709C15.1088 0.533872 14.9409 0.5886 14.7506 0.68711C14.5492 0.796566 14.1015 0.96075 13.7658 1.05926L13.1614 1.24534L12.613 0.884131C12.3108 0.68711 11.8856 0.468198 11.6617 0.402524C11.0909 0.249286 10.218 0.271177 9.70318 0.446307C8.30422 0.938859 7.42008 2.20855 7.5208 3.59864Z"
                                  fill="white"/>
                        </svg>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;