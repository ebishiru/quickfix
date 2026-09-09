import Image from "next/image";

export default function About() {
    return (
        <div>
            {/* Brief Description */}
            <div>
                <h1 className="font-bold">About QuickFix</h1>
                <p>At <b>QuickFix</b>, we believe getting a repair shouldn't be complicated. That's why we provide a wide range of reliable repair and maintenance services under one roof.</p>
                <p>Our experienced team helps homeowners and businesses take care of problems quickly and efficiently.</p>
            </div>
            {/* Pictures */}
            <div>
                <Image src="/repair_consoultation.jpg" fill alt="Consultation"/>
                <Image src="/repair_kitchen.jpg" fill alt="Kitchen Consultation"/>
            </div>
            {/* More information */}
            <div>
                <p>Whether it's a small repair or a bigger job, we focus on clear communication, quality workmanship, and getting the job done right. When something breaks, you shouldn't have to call five different companies to figure out who can fix it.</p>
                <p className="font-bold">Whatever needs fixing, QuickFix is here to help.</p>
            </div>
        </div>
    )
}