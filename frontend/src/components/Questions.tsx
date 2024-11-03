import React from 'react';

const Questions = () => {
    return (
        <div className={'flex flex-col gap-[48px]'}>
            <div className={'flex flex-col w-full justify-center items-center gap-[16px]'}>
                <h4 className={'font-extrabold text-[36px] text-darkblue'}>
                    Frequently Asked Questions
                </h4>
                <h4 className={'font-normal text-[16px] text-gray'}>
                    Here are few of the most frequently asked questions by our valueable customers
                </h4>
            </div>
            <div className={'flex flex-col gap-[48px]'}>
                <div  className={'flex flex-row gap-[32px]'}>
                    <div className={'w-fit cursor-pointer transition duration-200 hover:border-[1px] border-[#1F2937] w-full py-[53px] flex flex-col justify-center items-center h-[200px] bg-[#F9FAFB]'}>
                        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_44_4109)">
                                <path d="M13.6663 50.6667C16.6119 50.6667 18.9997 48.2789 18.9997 45.3333C18.9997 42.3878 16.6119 40 13.6663 40C10.7208 40 8.33301 42.3878 8.33301 45.3333C8.33301 48.2789 10.7208 50.6667 13.6663 50.6667Z" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                                <path d="M45.6663 50.6667C48.6119 50.6667 50.9997 48.2789 50.9997 45.3333C50.9997 42.3878 48.6119 40 45.6663 40C42.7208 40 40.333 42.3878 40.333 45.3333C40.333 48.2789 42.7208 50.6667 45.6663 50.6667Z" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                                <path d="M19 47.9997H40.3333M51 47.9997H56.3333V31.9997M56.3333 31.9997C56.3333 27.049 54.9286 22.301 52.4281 18.8003C49.9276 15.2997 46.5362 13.333 43 13.333H40.3333L44.3333 31.9997H56.3333Z" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                                <path d="M32.333 47.9997V13.333H40.333" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                                <path d="M8.33301 45.3333V32H32.333" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_44_4109">
                                    <rect width="64" height="64" fill="white" transform="translate(0.333008)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p className={'worksansmedium text-[20px] text-darkblue'}>
                            Shipping
                        </p>
                    </div>
                    <div className={'w-fit cursor-pointer transition duration-200 hover:border-[1px] border-[#1F2937] w-full py-[53px] flex flex-col justify-center items-center h-[200px] bg-[#F9FAFB]'}>
                        <div className={'w-[65px] h-[64px] justify-center items-center flex'}>
                            <svg width="30" height="48" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.5337 13.3333C27.0029 11.8273 26.0335 10.5146 24.7504 9.5641C23.4672 8.61362 21.929 8.06888 20.3337 8H9.66699C7.54526 8 5.51043 8.84286 4.01014 10.3431C2.50985 11.8434 1.66699 13.8783 1.66699 16C1.66699 18.1217 2.50985 20.1566 4.01014 21.6569C5.51043 23.1571 7.54526 24 9.66699 24H20.3337C22.4554 24 24.4902 24.8429 25.9905 26.3431C27.4908 27.8434 28.3337 29.8783 28.3337 32C28.3337 34.1217 27.4908 36.1566 25.9905 37.6569C24.4902 39.1571 22.4554 40 20.3337 40H9.66699C8.07165 39.9311 6.53342 39.3864 5.25027 38.4359C3.96713 37.4854 2.99778 36.1727 2.46699 34.6667" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                                <path d="M15 0V8M15 40V48" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                            </svg>


                        </div>
                        <p className={'worksansmedium text-[20px] text-darkblue'}>
                            Payment
                        </p>
                    </div>
                    <div className={'w-fit cursor-pointer transition duration-200 hover:border-[1px] border-[#1F2937] w-full py-[53px] flex flex-col justify-center items-center h-[200px] bg-[#F9FAFB]'}>
                        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_44_4124)">
                                <path d="M48.6657 21.333H27.3324C24.3868 21.333 21.999 23.7208 21.999 26.6663V47.9997C21.999 50.9452 24.3868 53.333 27.3324 53.333H48.6657C51.6112 53.333 53.999 50.9452 53.999 47.9997V26.6663C53.999 23.7208 51.6112 21.333 48.6657 21.333Z" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                                <path d="M21.999 38.6665L39.311 21.3545" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                                <path d="M36.6553 53.344L53.9993 36" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                                <path d="M23.5625 51.7704L52.4345 22.8984" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                                <path d="M43.333 21.3337V16.0003C43.333 14.5858 42.7711 13.2293 41.7709 12.2291C40.7707 11.2289 39.4142 10.667 37.9997 10.667H16.6663C15.2519 10.667 13.8953 11.2289 12.8951 12.2291C11.8949 13.2293 11.333 14.5858 11.333 16.0003V37.3337C11.333 38.7481 11.8949 40.1047 12.8951 41.1049C13.8953 42.1051 15.2519 42.667 16.6663 42.667H21.9997" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_44_4124">
                                    <rect width="64" height="64" fill="white" transform="translate(0.666016)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p className={'worksansmedium text-[20px] text-darkblue'}>
                            Products
                        </p>
                    </div>
                    <div className={'w-fit cursor-pointer transition duration-200 hover:border-[1px] border-[#1F2937] w-full py-[53px] flex flex-col justify-center items-center h-[200px] bg-[#F9FAFB]'}>
                        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.667 2.66699L56.3337 13.3337L45.667 24.0003" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                            <path d="M8.33301 29.333V23.9997C8.33301 21.1707 9.45681 18.4576 11.4572 16.4572C13.4576 14.4568 16.1707 13.333 18.9997 13.333H56.333" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                            <path d="M18.9997 61.3333L8.33301 50.6667L18.9997 40" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                            <path d="M56.333 34.667V40.0003C56.333 42.8293 55.2092 45.5424 53.2088 47.5428C51.2084 49.5432 48.4953 50.667 45.6663 50.667H8.33301" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                        </svg>
                        <p className={'worksansmedium text-[20px] text-darkblue'}>
                            Return Policy
                        </p>
                    </div>

                    <div className={'w-fit cursor-pointer transition duration-200 hover:border-[1px] border-[#1F2937] w-full py-[53px] flex flex-col justify-center items-center h-[200px] bg-[#F9FAFB]'}>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_44_4140)">
                                <path d="M27.5333 11.512C28.6693 6.82933 35.3307 6.82933 36.4667 11.512C36.6371 12.2155 36.9713 12.8687 37.4419 13.4187C37.9125 13.9686 38.5064 14.3996 39.1751 14.6767C39.8438 14.9537 40.5684 15.0689 41.2901 15.013C42.0118 14.957 42.71 14.7315 43.328 14.3547C47.4427 11.848 52.1547 16.5573 49.648 20.6747C49.2717 21.2924 49.0465 21.9902 48.9907 22.7114C48.9349 23.4326 49.05 24.1567 49.3267 24.825C49.6035 25.4933 50.034 26.0869 50.5833 26.5575C51.1326 27.0281 51.7852 27.3624 52.488 27.5333C57.1707 28.6693 57.1707 35.3307 52.488 36.4667C51.7845 36.6371 51.1313 36.9713 50.5813 37.4419C50.0314 37.9125 49.6004 38.5064 49.3233 39.1751C49.0463 39.8438 48.9311 40.5684 48.987 41.2901C49.043 42.0118 49.2685 42.71 49.6453 43.328C52.152 47.4427 47.4427 52.1547 43.3253 49.648C42.7076 49.2717 42.0098 49.0465 41.2886 48.9907C40.5674 48.9349 39.8433 49.05 39.175 49.3267C38.5067 49.6035 37.9131 50.034 37.4425 50.5833C36.9719 51.1326 36.6376 51.7852 36.4667 52.488C35.3307 57.1707 28.6693 57.1707 27.5333 52.488C27.3629 51.7845 27.0287 51.1313 26.5581 50.5813C26.0875 50.0314 25.4936 49.6004 24.8249 49.3233C24.1562 49.0463 23.4316 48.9311 22.7099 48.987C21.9883 49.043 21.29 49.2685 20.672 49.6453C16.5573 52.152 11.8453 47.4427 14.352 43.3253C14.7283 42.7076 14.9535 42.0098 15.0093 41.2886C15.0651 40.5674 14.95 39.8433 14.6733 39.175C14.3965 38.5067 13.966 37.9131 13.4167 37.4425C12.8674 36.9719 12.2148 36.6376 11.512 36.4667C6.82933 35.3307 6.82933 28.6693 11.512 27.5333C12.2155 27.3629 12.8687 27.0287 13.4187 26.5581C13.9686 26.0875 14.3996 25.4936 14.6767 24.8249C14.9537 24.1562 15.0689 23.4316 15.013 22.7099C14.957 21.9883 14.7315 21.29 14.3547 20.672C11.848 16.5573 16.5573 11.8453 20.6747 14.352C23.3413 15.9733 26.7973 14.5387 27.5333 11.512Z" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                                <path d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_44_4140">
                                    <rect width="64" height="64" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p className={'worksansmedium text-[20px] text-darkblue'}>
                            Account
                        </p>
                    </div>

                    <div className={'w-fit cursor-pointer transition duration-200 hover:border-[1px] border-[#1F2937] w-full py-[53px] flex flex-col justify-center items-center h-[200px] bg-[#F9FAFB]'}>
                        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_44_4146)">
                                <path d="M13.9993 10.667H24.666L29.9993 24.0003L23.3327 28.0003C26.1886 33.7911 30.8753 38.4778 36.666 41.3337L40.666 34.667L53.9993 40.0003V50.667C53.9993 52.0815 53.4374 53.438 52.4372 54.4382C51.4371 55.4384 50.0805 56.0003 48.666 56.0003C38.2641 55.3682 28.4531 50.951 21.0842 43.5821C13.7154 36.2132 9.29815 26.4023 8.66602 16.0003C8.66602 14.5858 9.22792 13.2293 10.2281 12.2291C11.2283 11.2289 12.5849 10.667 13.9993 10.667Z" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                                <path d="M40.666 18.667C42.0805 18.667 43.4371 19.2289 44.4372 20.2291C45.4374 21.2293 45.9993 22.5858 45.9993 24.0003" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                                <path d="M40.666 8C44.9095 8 48.9791 9.68571 51.9797 12.6863C54.9803 15.6869 56.666 19.7565 56.666 24" stroke="#4B5563" stroke-width="1.5" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_44_4146">
                                    <rect width="64" height="64" fill="white" transform="translate(0.666016)"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <p className={'worksansmedium text-[20px] text-darkblue'}>
                            Contact
                        </p>
                    </div>

                </div>
                <div className={'flex flex-col gap-[64px]'}>
                    <div className={'flex flex-col gap-[24px]'}>
                        <h4 className={'worksansmedium text-[20px] text-darkblue'}>
                            How long does it take for my package to arrive?
                        </h4>
                        <h6 className={'worksansregulars text-[16px] text-gray'}>
                            For sterling silver items, your order will be delivered within 7 to 10 business days, including production and delivery, after you place an order.
                            <br/>
                            <br/>
                            For sold gold items, your order will be delivered within 10 to 15 business days, including production andelivery, after you plance an order
                        </h6>
                    </div>
                    <div className={'flex flex-col gap-[24px]'}>
                        <h4 className={'worksansmedium text-[20px] text-darkblue'}>
                            Where is my order?
                        </h4>
                        <h6 className={'worksansregulars text-[16px] text-gray'}>
                            Remeber you can query the staus of your oders any time in My orders in the My aacount section.l if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause,  you will have enter your em-mail address and order number.
                            <br/>
                            <br/>
                            What is more, when your order leaves our wharehouses, we will send you an e-mail.
                        </h6>
                    </div>
                    <div className={'flex flex-col gap-[24px]'}>
                        <h4 className={'worksansmedium text-[20px] text-darkblue'}>
                            Can I cancel or change my Order?
                        </h4>
                        <h6 className={'worksansregulars text-[16px] text-gray'}>

                            Yes, you can change or cancel your order within the first 10 days of your order placement.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;
