import Image from "next/legacy/image";

import Center from "@/components/Global/Ui/Center";
import Head from "@/components/Global/Ui/Head";
import corn from "@/public/policy/corn.jpg";
export default function AboutSection() {
  return (
    <Center>
      <Head
        title="حول الشركة"
        subTitle={
          "تأسست شركة مكسيكانو عام 2015 كمشروع مشترك بين مجموعة مستثمرين أجانب لهم تاريخ عريق في مجال طحن الذرة واستخراج أفضل أنواع الدقيق والسومولينا والجر"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4  w-full">
        <Image
          src={corn}
          alt="Quality Control"
          width={300}
          height={300}
          className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
        />
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-bold">من نحن</div>
          <div className="text-justify">
            بخبرة واسعة في سوريا في مجال طحن القمح والذرة، تأسست شركة مكسيكانو
            في مصر عام 2015 كمشروع مشترك بين مجموعة من المستثمرين السوريين
            والإيطاليين.يتم تصنيع مصنعنا باستخدام أهم خطوط الإنتاج الإيطالية
            والتركية وبأيدي أكبر المهندسين والخبراء في مجال الآلات الرائدة في
            الطحن والتصنيع. هدفنا:الهدف الرئيسي لشركة مكسيكانو هو دخول السوق
            المصرية والعالمية بخطى ثابتة. نحن على ثقة كبيرة بأن الشركة قد عملت
            على تطوير استراتيجية عمل تهدف إلى تطبيق جميع المعايير والمواصفات
            المصرية والدولية لتحقيق التميز والابتكار في هذا المجال.نركز على
            الامتثال للوائح الدولية الجديدة في طحن القمح والذرة للوصول إلى أعلى
            مستويات المعايير الدولية والمصرية. فلسفتنا تجاه العملاء:لم نساوم
            أبدًا على الجودة والخدمات المقدمة للعملاء. نحن نلبي احتياجات المصانع
            من طحن أفضل أنواع القمح والذرة العا
          </div>
        </div>
      </div>
    </Center>
  );
}
