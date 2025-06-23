const Map = () => {
  return (
    <div className="w-full h-full">
      <iframe
        title="Google Maps"
        className="w-full h-full rounded-lg shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14160.989897538224!2d31.37449037101891!3d30.136578486175328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6207ae1f41b8392f%3A0xea05b7fbd5f93b9f!2sTactics%20Digital%20Agency!5e0!3m2!1sen!2seg!4v1747599845557!5m2!1sen!2seg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;
