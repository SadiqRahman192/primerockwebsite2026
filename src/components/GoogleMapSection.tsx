// import { useTranslation } from 'react-i18next';

const GoogleMapSection = () => {
    // const { t } = useTranslation("global");
    return (
        <section className="w-full md:w-5/6 items-center mx-auto my-8 px-4" >
            {/* <h3 className="text-2xl font-light text-white mb-4">{t('footer_our_location', { defaultValue: 'Our Location' })}</h3> */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116488.78983348206!2d55.73859057650207!3d24.16209767359175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab73581049de3%3A0x856146611d9b26b2!2sIndustrial%20Area%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1757069964521!5m2!1sen!2s"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md shadow-sm"
            />
        </section>
    )
}

export default GoogleMapSection


