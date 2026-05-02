import {WhyChooseUs} from "./WhyChooseUs.jsx";
import {AdditionalFeatures} from "./AdditionalFeatures.jsx";

export function ServiceInfo() {
    return (
        <div className='px-3 py-5 grid grid-cols-2 gap-8 mx-auto max-w-[1536px]'>
            <WhyChooseUs />
            <AdditionalFeatures />
        </div>
    )
}