import styles from "@/styles/Article.module.less";
import { IArticleInitialState } from "@/store/modules/article";
import { Tooltip, Badge, Popover } from "antd";
import { memo } from "react";
interface IProps {
  article: IArticleInitialState
}
export function Panel(props: IProps) {
  const { article } = props;
  const share_content = (
    <div className={styles.share_popup}>
      <ul className={styles.share_ul}>
        <li className={styles.share_li}>
          <svg className={styles.sprite_icon}>
            <use href="#icon-wechat"></use>
          </svg>
          <span>&nbsp;&nbsp;</span>
          <span>微信</span>
        </li>
        <li className={styles.share_li}>
          <svg className={styles.sprite_icon}>
            <use href="#icon-weibo"></use>
          </svg>
          <span>&nbsp;&nbsp;</span>
          <span>新浪微博</span>
        </li>
        <li className={styles.share_li}>
          <svg className={styles.sprite_icon}>
            <use href="#icon-qq"></use>
          </svg>
          <span>&nbsp;&nbsp;</span>
          <span>QQ</span>
        </li>
      </ul>
    </div>
  );
  return (
    <div className={styles.article_panel}>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol
          id="icon-collect"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.24287 18.3845C4.89724 18.5507 4.48229 18.4053 4.31605 18.0596C4.26029 17.9437 4.23783 17.8146 4.25117 17.6866L4.75725 12.8332C4.77762 12.6379 4.71431 12.443 4.583 12.297L1.29207 8.63594C1.03567 8.35071 1.05905 7.91164 1.34428 7.65524C1.43464 7.574 1.54475 7.5179 1.66358 7.49254L6.47789 6.46509C6.66998 6.42409 6.83572 6.30367 6.93407 6.13365L9.39894 1.87248C9.59098 1.54049 10.0158 1.42704 10.3478 1.61907C10.453 1.67992 10.5403 1.76729 10.6012 1.87248L13.0661 6.13365C13.1644 6.30367 13.3301 6.42409 13.5222 6.46509L18.3365 7.49254C18.7116 7.57259 18.9508 7.94155 18.8707 8.31664C18.8454 8.43547 18.7893 8.54557 18.708 8.63594L15.4171 12.297C15.2858 12.443 15.2225 12.6379 15.2429 12.8332L15.7489 17.6866C15.7887 18.0681 15.5117 18.4096 15.1303 18.4493C15.0023 18.4627 14.8732 18.4402 14.7572 18.3845L10.3011 16.2412C10.1108 16.1497 9.8893 16.1497 9.69906 16.2412L5.24287 18.3845Z"
            data-v-b7c4e7d2=""
          ></path>
        </symbol>
        <symbol
          id="icon-comment"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          data-v-b7c4e7d2=""
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.62739 1.25C2.9347 1.25 1.5625 2.6222 1.5625 4.31489L1.56396 12.643C1.56403 14.3356 2.9362 15.7078 4.62885 15.7078H6.48326L6.93691 17.6869L6.93884 17.6948C7.16894 18.6441 8.28598 19.0599 9.08073 18.4921L12.7965 15.7078H15.5001C17.1928 15.7078 18.565 14.3355 18.565 12.6428L18.5635 4.31477C18.5635 2.62213 17.1913 1.25 15.4986 1.25H4.62739ZM5.98265 9.89255C6.68783 9.89255 7.2595 9.32089 7.2595 8.61571C7.2595 7.91053 6.68783 7.33887 5.98265 7.33887C5.27747 7.33887 4.70581 7.91053 4.70581 8.61571C4.70581 9.32089 5.27747 9.89255 5.98265 9.89255ZM9.95604 9.89255C10.6612 9.89255 11.2329 9.32089 11.2329 8.61571C11.2329 7.91053 10.6612 7.33887 9.95604 7.33887C9.25086 7.33887 8.6792 7.91053 8.6792 8.61571C8.6792 9.32089 9.25086 9.89255 9.95604 9.89255ZM15.2124 8.61571C15.2124 9.32089 14.6407 9.89255 13.9355 9.89255C13.2304 9.89255 12.6587 9.32089 12.6587 8.61571C12.6587 7.91053 13.2304 7.33887 13.9355 7.33887C14.6407 7.33887 15.2124 7.91053 15.2124 8.61571Z"
            data-v-b7c4e7d2=""
          ></path>
        </symbol>
        <symbol
          id="icon-zan"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          data-v-b7c4e7d2=""
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0651 3.25923C12.6654 2.21523 12.1276 1.60359 11.4633 1.40559C10.8071 1.21 10.2539 1.48626 9.97848 1.67918C9.43962 2.05668 9.17297 2.64897 9.0009 3.12662C8.93522 3.30893 8.87504 3.50032 8.82077 3.67291L8.82077 3.67292C8.80276 3.73019 8.78541 3.78539 8.76872 3.8375C8.6974 4.06017 8.63455 4.23905 8.56561 4.38315C8.07104 5.41687 7.64014 6.034 7.2617 6.43277C6.89154 6.8228 6.5498 7.0275 6.18413 7.21038C5.8887 7.35813 5.69369 7.66144 5.69365 8.00211L5.69237 17.3908C5.6923 17.8783 6.08754 18.2736 6.57511 18.2736H14.8382C15.2621 18.2736 15.5829 18.1393 15.8149 17.9421C15.9234 17.8497 15.9985 17.7554 16.0484 17.6856C16.0695 17.6561 16.088 17.6282 16.0983 17.6126L16.1017 17.6075L16.1033 17.6051L16.1194 17.5857L16.1428 17.5478C16.913 16.3019 17.4472 15.3088 17.8659 14.1183C18.3431 12.7613 18.5849 11.5853 18.6874 10.6685C18.7871 9.77617 18.7612 9.07318 18.6558 8.68779C18.5062 8.14118 18.138 7.82653 17.7668 7.66617C17.4231 7.51771 17.0763 7.49836 16.8785 7.49807L13.1134 7.44551C13.662 5.19751 13.31 3.89889 13.0651 3.25923ZM1.251 8.0848C1.22726 7.5815 1.62891 7.16046 2.13277 7.16046H3.4408C3.92832 7.16046 4.32354 7.55568 4.32354 8.04321V17.4303C4.32354 17.9178 3.92832 18.313 3.4408 18.313H2.57554C2.10419 18.313 1.71599 17.9427 1.69378 17.4718L1.251 8.0848Z"
            data-v-b7c4e7d2=""
          ></path>
        </symbol>
        <symbol
          id="icon-share"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          data-v-b7c4e7d2=""
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.4167 6.40399C5.35406 6.40399 1.25 10.5675 1.25 15.7035C1.25 16.0225 1.28448 16.4512 1.35344 16.9898C1.36807 17.1039 1.47243 17.1846 1.58655 17.17C1.6483 17.1621 1.70328 17.127 1.73643 17.0743L1.86865 16.8676C1.99553 16.6731 2.10644 16.5147 2.20137 16.3925C3.69554 14.4692 6.13777 13.3823 9.35515 13.3378L10.4167 13.3364V17.0757C10.4167 17.3101 10.6086 17.5 10.8453 17.5C10.959 17.5 11.068 17.4553 11.1483 17.3757L18.145 10.45C18.3961 10.2015 18.3961 9.79853 18.145 9.55L11.1483 2.62426C10.981 2.45858 10.7096 2.45858 10.5422 2.62426C10.4618 2.70383 10.4167 2.81174 10.4167 2.92426V6.40399Z"
            data-v-b7c4e7d2=""
          ></path>
        </symbol>
        <symbol
          id="icon-report"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          data-v-b7c4e7d2=""
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.8389 1.89381C11.0873 2.03868 11.2939 2.24532 11.4388 2.49366L18.9369 15.0065C19.4007 15.8015 19.1322 16.8221 18.3371 17.2859C18.0822 17.4346 17.7924 17.5129 17.4973 17.5129H2.50041C1.57993 17.5129 0.83374 16.7667 0.83374 15.8462C0.83374 15.5512 0.912088 15.2614 1.06078 15.0065L8.5595 2.49366C9.0233 1.69857 10.0438 1.43001 10.8389 1.89381ZM10.3118 13.3459C10.6283 13.3459 10.8848 13.6025 10.8848 13.9189V14.4918C10.8848 14.8082 10.6283 15.0647 10.3118 15.0647H9.73893C9.42252 15.0647 9.16602 14.8082 9.16602 14.4918V13.9189C9.16602 13.6025 9.42252 13.3459 9.73893 13.3459H10.3118ZM10.8356 7.09513C10.8356 6.86502 10.6491 6.67847 10.419 6.67847H9.58512C9.35501 6.67847 9.16846 6.86502 9.16846 7.09513V12.0956C9.16846 12.3257 9.35501 12.5123 9.58512 12.5123H10.419C10.6491 12.5123 10.8356 12.3257 10.8356 12.0956V7.09513Z"
            data-v-b7c4e7d2=""
          ></path>
        </symbol>
        <symbol
          id="icon-immerse"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          data-v-b7c4e7d2=""
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.25 1C0.25 0.585786 0.585786 0.25 1 0.25H4C4.41421 0.25 4.75 0.585786 4.75 1C4.75 1.41421 4.41421 1.75 4 1.75H1.75V4C1.75 4.41421 1.41421 4.75 1 4.75C0.585786 4.75 0.25 4.41421 0.25 4V1ZM0.25 19C0.25 19.4142 0.585786 19.75 1 19.75H4C4.41421 19.75 4.75 19.4142 4.75 19C4.75 18.5858 4.41421 18.25 4 18.25H1.75V16C1.75 15.5858 1.41421 15.25 1 15.25C0.585786 15.25 0.25 15.5858 0.25 16V19ZM19 0.25C19.4142 0.25 19.75 0.585786 19.75 1V4C19.75 4.41421 19.4142 4.75 19 4.75C18.5858 4.75 18.25 4.41421 18.25 4V1.75H16C15.5858 1.75 15.25 1.41421 15.25 1C15.25 0.585786 15.5858 0.25 16 0.25H19ZM19.75 19C19.75 19.4142 19.4142 19.75 19 19.75H16C15.5858 19.75 15.25 19.4142 15.25 19C15.25 18.5858 15.5858 18.25 16 18.25H18.25V16C18.25 15.5858 18.5858 15.25 19 15.25C19.4142 15.25 19.75 15.5858 19.75 16V19ZM7 5C5.89543 5 5 5.89543 5 7V13C5 14.1046 5.89543 15 7 15H13C14.1046 15 15 14.1046 15 13V7C15 5.89543 14.1046 5 13 5H7Z"
            data-v-b7c4e7d2=""
          ></path>
        </symbol>
        <symbol
          id="icon-wechat"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          data-v-b7c4e7d2=""
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5578 5.34061C12.0476 2.85722 8.90911 1.73257 6.11813 2.05358C4.56413 2.23231 3.0449 2.85861 1.88463 3.92471C1.00689 4.72863 0.354462 5.78486 0.109889 6.95889C-0.187864 8.37395 0.125815 9.85314 0.957723 11.0298C1.28982 11.4994 1.68479 11.9193 2.11951 12.2941C2.25136 12.4079 2.38694 12.5172 2.52543 12.6228C2.59301 12.6742 2.66115 12.7249 2.73011 12.7745C2.74195 12.7831 2.75392 12.7902 2.76512 12.7969C2.80389 12.8201 2.83351 12.8378 2.81653 12.8887L2.67458 13.3177C2.53986 13.7252 2.40492 14.1325 2.26998 14.5399C2.22084 14.6883 2.17169 14.8366 2.12256 14.985L2.61572 14.7368C2.85714 14.6151 3.09863 14.4935 3.34012 14.3719C3.58099 14.2507 3.82186 14.1294 4.06266 14.0081L4.40902 13.8337C4.42474 13.8257 4.44104 13.8164 4.45775 13.8069C4.51759 13.7728 4.58265 13.7356 4.64501 13.7481C4.76613 13.7723 4.88708 13.7972 5.00801 13.8221C5.08094 13.8372 5.15386 13.8522 5.22681 13.867C6.06287 14.0373 6.88508 14.1348 7.73859 14.0675C7.4486 13.0669 7.44915 12.0016 7.7559 11.0045C8.09853 9.88624 8.81438 8.89831 9.74448 8.19773C11.0171 7.23915 12.6431 6.81493 14.2212 6.99199C14.0895 6.4081 13.8688 5.85148 13.5578 5.34061ZM4.77922 5.02147C4.28094 5.02147 3.71299 5.35514 3.71299 5.90829C3.71299 6.46088 4.28066 6.79844 4.77922 6.79844C5.29233 6.79844 5.66293 6.42291 5.66293 5.90829C5.66293 5.39311 5.29205 5.02147 4.77922 5.02147ZM10.6158 5.90829C10.6158 6.42444 10.2434 6.79844 9.7296 6.79844C9.23076 6.79844 8.66641 6.46032 8.66641 5.90829C8.66641 5.3557 9.23104 5.02147 9.7296 5.02147C10.2431 5.02147 10.6158 5.39158 10.6158 5.90829ZM17.7911 8.53846C15.3552 6.80489 11.734 6.93368 9.53048 9.01108C8.77779 9.72181 8.22909 10.6485 8.04061 11.6744C7.78288 13.0799 8.22536 14.5441 9.17304 15.605C10.0674 16.6063 11.2889 17.2564 12.5986 17.5166C13.4216 17.6806 14.2559 17.6931 15.0799 17.5344C15.2863 17.4948 15.4911 17.4481 15.6954 17.3986C15.7826 17.3774 15.8697 17.3559 15.9568 17.334C15.9655 17.3319 15.9784 17.3272 15.9934 17.3219C16.0359 17.3068 16.0949 17.2858 16.118 17.2984C16.2476 17.3695 16.3771 17.4408 16.5066 17.5122L17.0557 17.8142L17.0577 17.8153L17.0598 17.8164C17.3912 17.9986 17.7227 18.1809 18.054 18.3634C17.9748 18.0977 17.895 17.832 17.8153 17.5664L17.8146 17.5641L17.6749 17.0981L17.5814 16.7863L17.5332 16.6257C17.5159 16.5675 17.5927 16.5183 17.6556 16.4779C17.6753 16.4653 17.6937 16.4535 17.7073 16.4426C18.0608 16.1622 18.3952 15.8558 18.6963 15.5191C19.1832 14.9747 19.5895 14.3498 19.8161 13.6505C20.0122 13.039 20.0488 12.392 19.9377 11.7604C19.7098 10.438 18.8643 9.30511 17.7911 8.53846ZM15.2396 11.0049C15.1595 10.6088 15.5334 10.1787 15.931 10.1787C16.3063 10.1787 16.7409 10.3931 16.8096 10.7989C16.8724 11.1695 16.556 11.4696 16.227 11.5617C15.8032 11.6802 15.3326 11.4649 15.2396 11.0049ZM12.0348 10.1787C11.6369 10.1787 11.2573 10.6064 11.3385 11.0049C11.4325 11.4667 11.9081 11.68 12.3327 11.5617C12.6626 11.4696 12.9753 11.1695 12.9134 10.7989C12.8453 10.3914 12.4112 10.1787 12.0348 10.1787Z"
            data-v-b7c4e7d2=""
          ></path>
        </symbol>
        <symbol
          id="icon-weibo"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          data-v-b7c4e7d2=""
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-0.000244141 13.0984C-0.000244141 8.70757 6.6145 3.5004 9.18008 4.57052C10.1717 4.98415 9.97381 6.1693 9.85415 6.88576C9.8069 7.16863 9.77186 7.37844 9.82705 7.43887C9.92921 7.55074 10.2955 7.42054 10.7994 7.2414C11.8362 6.87286 13.4557 6.2972 14.5566 7.19617C15.2665 7.77576 14.9657 8.72382 14.7905 9.27603C14.7289 9.4701 14.6829 9.61528 14.7017 9.6784C14.741 9.81053 14.9858 9.91133 15.317 10.0477C15.926 10.2984 16.8269 10.6692 17.2784 11.5759C18.3716 13.7713 15.2036 18.2504 8.62234 18.2504C3.25024 18.2504 -0.000244141 15.6688 -0.000244141 13.0984ZM8.45309 17.057C11.7733 16.7393 14.2944 14.7397 14.0842 12.5908C13.874 10.4418 11.012 8.95732 7.69179 9.27503C4.37159 9.59274 1.85045 11.5924 2.06068 13.7413C2.2709 15.8902 5.13288 17.3747 8.45309 17.057Z"
            data-v-b7c4e7d2=""
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.7098 12.7012C11.1162 14.1374 10.0604 15.6852 8.35157 16.1581C6.64275 16.6311 4.92801 15.8502 4.5216 14.4139C4.11518 12.9777 5.171 11.4299 6.87982 10.957C8.58865 10.484 10.3034 11.2649 10.7098 12.7012ZM7.67026 13.6265C7.89619 14.1072 7.61751 14.7092 7.04779 14.9711C6.47808 15.2331 5.83308 15.0558 5.60715 14.5751C5.38122 14.0945 5.6599 13.4925 6.22962 13.2306C6.79933 12.9686 7.44433 13.1459 7.67026 13.6265ZM8.41746 13.3766C8.63945 13.2745 8.74804 13.0399 8.66001 12.8526C8.57197 12.6654 8.32065 12.5963 8.09866 12.6984C7.87667 12.8004 7.76808 13.035 7.85612 13.2223C7.94415 13.4095 8.19547 13.4786 8.41746 13.3766Z"
            data-v-b7c4e7d2=""
          ></path>
          <path
            d="M13.648 3.54836C13.9523 3.47388 14.2712 3.43418 14.6004 3.43418C16.7813 3.43418 18.5492 5.18267 18.5492 7.33955C18.5492 7.81593 18.4633 8.27085 18.3066 8.69104C18.168 9.06261 18.3602 9.47493 18.7359 9.61199C19.1116 9.74904 19.5285 9.55894 19.6671 9.18737C19.8822 8.61063 19.9993 7.98781 19.9993 7.33955C19.9993 4.3906 17.5822 2 14.6004 2C14.1528 2 13.717 2.05403 13.2996 2.15619C12.9109 2.25133 12.6738 2.64011 12.77 3.02455C12.8662 3.40899 13.2593 3.6435 13.648 3.54836Z"
            data-v-b7c4e7d2=""
          ></path>
          <path
            d="M14.2887 6.05162C14.388 6.02824 14.4923 6.01569 14.6004 6.01569C15.3397 6.01569 15.939 6.6084 15.939 7.33955C15.939 7.49914 15.9108 7.65062 15.8596 7.7904C15.7232 8.16277 15.9179 8.57396 16.2944 8.70881C16.6709 8.84366 17.0867 8.65112 17.2231 8.27875C17.3307 7.98466 17.3891 7.66805 17.3891 7.33955C17.3891 5.81633 16.1406 4.58152 14.6004 4.58152C14.3784 4.58152 14.1614 4.60734 13.9529 4.65643C13.5633 4.74813 13.3227 5.1348 13.4154 5.52008C13.5082 5.90535 13.8991 6.14333 14.2887 6.05162Z"
            data-v-b7c4e7d2=""
          ></path>
        </symbol>
        <symbol
          id="icon-qq"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          data-v-b7c4e7d2=""
        >
          <path
            d="M11.8841 17.1943C11.1815 17.1943 10.5625 17.2136 10.0541 17.26C9.44625 17.2112 8.8365 17.1898 8.22671 17.1956C6.20498 17.1956 4.40588 17.9613 4.40588 18.5263C4.40588 19.0681 5.89998 19.0076 7.91657 18.987C8.64426 18.985 9.3699 18.9096 10.0824 18.7618C10.6796 18.8879 11.4079 18.9677 12.193 18.9741C14.2095 18.9947 15.7024 19.0552 15.7024 18.5173C15.7024 17.9549 13.9045 17.1943 11.8841 17.1943V17.1943Z"
            data-v-b7c4e7d2=""
          ></path>
          <path
            d="M16.9138 11.6311C16.5346 10.6112 16.1212 9.60428 15.6745 8.61206C15.6951 8.37141 15.7054 8.12818 15.7054 7.8811C15.7054 4.08086 13.7622 1 10.0649 1C6.36759 1 4.42307 4.08086 4.42307 7.8811C4.42307 8.11274 4.43208 8.34052 4.45138 8.56573C3.99804 9.5756 3.57913 10.6006 3.19536 11.6389C2.41678 13.7494 2.38203 15.6566 2.65357 15.7982C2.84661 15.8985 3.54797 15.1611 4.21845 13.9669C4.66115 16.7801 6.53102 18.8842 10.0649 18.8842C13.5871 18.8842 15.457 16.7916 15.9074 13.99C16.5728 15.1611 17.2664 15.8818 17.4569 15.7814C17.7284 15.6399 17.6937 13.7365 16.9138 11.6311V11.6311Z"
            data-v-b7c4e7d2=""
          ></path>
          <path
            d="M8.5542 3.2522C8.00598 3.26507 7.57358 3.90981 7.58902 4.69739C7.60447 5.48369 8.06132 6.11299 8.60954 6.1027C9.15776 6.0924 9.59016 5.44637 9.57472 4.65879C9.56056 3.87249 9.10243 3.24319 8.5542 3.25348V3.2522ZM11.5862 3.26764C11.0315 3.25734 10.5695 3.88278 10.5541 4.66651C10.5386 5.44895 10.9749 6.0924 11.5308 6.1027C12.0842 6.11299 12.5475 5.48755 12.5629 4.70512C12.5784 3.92139 12.1408 3.27794 11.5862 3.26764V3.26764Z"
            data-v-b7c4e7d2=""
          ></path>
          <path
            d="M13.6704 9.57861C12.5971 9.76521 11.354 9.87074 10.0285 9.87074C8.7287 9.87074 7.50742 9.76779 6.44959 9.58762C5.71605 10.4962 5.65942 11.8307 5.65942 13.3184C5.65942 16.0505 7.20371 18.2665 10.0645 18.2665C12.924 18.2665 14.4696 16.0505 14.4696 13.3184C14.4696 11.8243 14.4104 10.4859 13.6704 9.57861V9.57861Z"
            data-v-b7c4e7d2=""
          ></path>
          <path
            d="M10.0628 6.56616C8.14273 6.56616 6.58557 6.95223 6.58557 7.26238C6.58557 7.57124 8.62146 8.42188 10.0641 8.42188C11.5054 8.42188 13.5413 7.55065 13.5413 7.26238C13.5413 6.97411 11.9842 6.56745 10.0641 6.56745L10.0628 6.56616Z"
            data-v-b7c4e7d2=""
          ></path>
          <path
            d="M15.6744 8.6121L15.6757 8.59151C14.264 9.05866 12.2718 9.35078 10.0648 9.35078C7.8513 9.35078 5.85402 9.05737 4.441 8.58765C4.14115 9.25684 3.85546 9.93375 3.58521 10.6171C4.45644 10.9054 5.43192 11.1357 6.48332 11.2992V13.8858C6.48332 13.8858 7.22715 14.0235 7.92981 14.0531C8.42784 14.0737 8.95676 13.9888 8.95676 13.9888V11.5398C9.32095 11.5565 9.6903 11.5656 10.0635 11.5656C12.4919 11.5656 14.7311 11.2142 16.5251 10.6222C16.2566 9.94593 15.9729 9.27571 15.6744 8.6121V8.6121Z"
            data-v-b7c4e7d2=""
          ></path>
          <path
            d="M8.87981 4.24829C8.63787 4.24829 8.44226 4.53656 8.44226 4.89174C8.44226 5.24693 8.63787 5.5352 8.87981 5.5352C9.12046 5.5352 9.31736 5.24693 9.31736 4.89174C9.31736 4.53656 9.12046 4.24829 8.87981 4.24829V4.24829ZM12.0997 4.65624C12.0997 4.65624 11.9246 4.41816 11.4819 4.48122C11.0444 4.54428 10.8745 4.83126 10.8423 4.86215C10.8423 4.86215 10.7381 5.0243 10.8115 5.12467C10.8848 5.22505 11.0174 5.06676 11.0174 5.06676C11.0174 5.06676 11.2194 4.78364 11.4806 4.77335C11.6273 4.76349 11.7729 4.80489 11.8925 4.89046C11.8925 4.89046 12.0211 4.99856 12.0984 4.89046C12.1769 4.78364 12.0997 4.65624 12.0997 4.65624V4.65624Z"
            data-v-b7c4e7d2=""
          ></path>
        </symbol>
      </svg>
      <div>
        {article && <Badge count={article.like_count} color="#c2c8d1" offset={[0, 8]}>
          <div className={styles.panel_btn}>
            <svg className={styles.sprite_icon}>
              <use href="#icon-zan"></use>
            </svg>
          </div>
        </Badge>}
      </div>
      <div>
        {article && <Badge
          count={article.comment_count}
          color="#c2c8d1"
          offset={[0, 8]}
        >
          <div className={styles.panel_btn}>
            <svg className={styles.sprite_icon}>
              <use href="#icon-comment"></use>
            </svg>
          </div>
        </Badge>}

      </div>
      <div className={styles.panel_btn}>
        <svg className={styles.sprite_icon}>
          <use href="#icon-collect"></use>
        </svg>
      </div>
      <Popover content={share_content} placement="rightTop" trigger="hover" >
        <div className={styles.panel_btn}>
          <svg className={styles.sprite_icon}>
            <use href="#icon-share"></use>
          </svg>
        </div>
      </Popover>
      <div className={styles.divider}></div>
      <div className={styles.panel_btn}>
        <svg className={styles.sprite_icon}>
          <use href="#icon-report"></use>
        </svg>
      </div>
      <div className={styles.panel_btn}>
        <Tooltip title="沉浸阅读">
          <svg className={styles.sprite_icon}>
            <use href="#icon-immerse"></use>
          </svg>
        </Tooltip>
      </div>
    </div>
  );
}

export default memo(Panel);
Panel.displayName = "Panel";
