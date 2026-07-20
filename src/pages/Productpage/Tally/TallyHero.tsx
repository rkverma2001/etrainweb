import { ArrowRight, CheckCircle, BadgeCheck, Infinity, ShieldCheck } from "lucide-react";

interface Course {
  courseName: string;
  tabData: {
    Courseware: {
      price: number;
    };
  };
}

interface TallyHeroProps {
  course: Course;
}

const Features = [
  "100% Practical Training",
  "Industry Recognized Certificate",
  "Placement Assistance",
  "Real Business Projects",
];

export default function TallyHero({ course }: TallyHeroProps) {
  const words = course.courseName.split(" ");

  const firstPart = words.slice(0, words.length - 3).join(" ");
  const secondPart = words.slice(words.length - 3, words.length - 2).join(" ");
  const thirdPart = words.slice(words.length - 2).join(" ");

  const actualPrice = course.tabData.Courseware.price;
  const originalPrice = Math.round(actualPrice * 1.67);
  const discount = Math.round(
    ((originalPrice - actualPrice) / originalPrice) * 100
  );

  return (
    <section className="relative overflow-hidden">
      {/* Background Blur */}

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-green-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row">

        {/* Left */}

        <div className="flex-1">

          <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            {firstPart}{" "}
            <span className="text-green-600">{secondPart}</span>{" "}
            {thirdPart}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Learn Accounting, GST, Payroll, Inventory and Financial Reporting
            through practical business scenarios and become job ready.
          </p>

          {/* Features */}

          {/* <div className="mt-8 space-y-3">
            {Features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle
                  className="text-green-600"
                  size={22}
                />

                <span className="text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div> */}

          {/* Price */}

          <div className="mt-10">

            <div className="flex items-end gap-4">

              <h2 className="text-3xl font-semibold">
                Price: ₹{actualPrice.toLocaleString()}
              </h2>


            </div>

            <p className="mt-2 text-sm text-slate-500">
              Inclusive of all taxes
            </p>

          </div>

          {/* CTA */}

          <div className="mt-8 flex flex-wrap items-center gap-8">

            <button className="flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700">
              Add To Cart
              <ArrowRight size={20} />
            </button>

            {/* Small Benefits */}

            <div className="flex gap-8">

              <div className="flex flex-col items-center">
                <Infinity
                  className="text-green-600"
                  size={28}
                />
                <span className="mt-2 text-sm font-medium text-slate-600">
                  Lifetime
                </span>
              </div>

              <div className="flex flex-col items-center">
                <BadgeCheck
                  className="text-green-600"
                  size={28}
                />
                <span className="mt-2 text-sm font-medium text-slate-600">
                  Certificate
                </span>
              </div>

              <div className="flex flex-col items-center">
                <ShieldCheck
                  className="text-green-600"
                  size={28}
                />
                <span className="mt-2 text-sm font-medium text-slate-600">
                  Secure
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="relative flex-1">

          <div className="p-6">

            <img
              src="https://etrain.blr1.cdn.digitaloceanspaces.com/Tally/laptopimage.svg"
              alt="Tally Dashboard"
              className="h-88 rounded-2xl"
            />

          </div>

          {/* Floating Cards */}

          <div className="absolute -left-6 top-10 rounded-2xl bg-white p-4 shadow-xl">
            <p className="text-sm text-slate-500">
              GST Return
            </p>

            <h4 className="font-bold text-green-600">
              Filed Successfully
            </h4>
          </div>

          <div className="absolute -right-6 bottom-16 rounded-2xl bg-white p-4 shadow-xl">
            <p className="text-sm text-slate-500">
              Profit
            </p>

            <h4 className="font-bold text-green-600">
              ₹2,45,000
            </h4>
          </div>

        </div>

      </div>
    </section>
  );
}