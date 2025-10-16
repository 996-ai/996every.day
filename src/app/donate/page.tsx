import Image from "next/image";

export type PaymentCardProps = {
  title: string;
  qrCodeUrl: string;
  altText: string;
};

const PaymentCard = ({ title, qrCodeUrl, altText }: PaymentCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg shadow-md transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="w-48 h-48 md:w-56 md:h-56 p-2 rounded-lg border-2">
        <Image
          src={qrCodeUrl}
          alt={altText}
          width={224}
          height={224}
          className="object-contain w-full h-full"
        />
      </div>
      <p className="mt-3 text-sm">请使用{title}App扫描</p>
    </div>
  );
};

export default function DonatePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8">
      <div className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl p-6 sm:p-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">赞助 996ai</h1>
        <p className="mb-10 max-w-2xl mx-auto">
          您的支持是我们持续创作和维护的动力。我是个人开发者/学生, 收入很少,
          感谢您的慷慨解囊！ 赞助后我们将会加入项目README 以感谢! (可选,
          如果我忘记了请开issue提醒我)
        </p>
        <p>
          我们开发的程序保证永远免费
          <a href="https://github.com/996-ai" className="underline">
            开源
          </a>
          , 如果我们开发的程序为您节省了时间, 请考虑捐赠我们!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
          <PaymentCard
            title="微信"
            qrCodeUrl="/images/wechat-pay-qr.png"
            altText="微信支付二维码"
          />
          <PaymentCard
            title="支付宝"
            qrCodeUrl="/images/alipay-qr.png"
            altText="支付宝二维码"
          />
        </div>
      </div>
    </div>
  );
}
