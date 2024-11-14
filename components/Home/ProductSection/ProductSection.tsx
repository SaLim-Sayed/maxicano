import ProductCard from "@/components/Global/Ui/ProductCard";

import product1 from "@/public/policy/product1.jpg";
import product2 from "@/public/policy/product2.jpg";
export default function ProductSection() {
  return (
    <div className="flex flex-col w-full justify-center md:flex-row my-8">
      <ProductCard
        title="الذرة الصفراء / جريش الذرة"
        desc="تتميز شركتنا بإنتاج أفضل أنواع جريش الذرة بجميع أنواعها ولجميع الاستخدامات وفقاً لأفضل المعايير."
        imgSrc={product1}
      />
      <ProductCard
        title="الذرة الصفراء / دقيق الذرة"
        desc="تتميز شركتنا بإنتاج أفضل أنواع دقيق الذرة من جميع الأصناف ولجميع الاستخدامات وفقاً لأعلى المعايير."
        imgSrc={product2}
      />
    </div>
  );
}
