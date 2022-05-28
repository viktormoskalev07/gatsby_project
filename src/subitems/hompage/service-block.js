import * as React from "react"
import { Link } from "gatsby"
import { useInView } from "react-intersection-observer"

export const ServiceBlock = ( ) => {
  const { ref, inView  } = useInView({
    triggerOnce: true,
 
  });

  return (
    <div  className={"services_block_flex" + (inView? " active " : " ")}>
      <Link to="/uslugi/avtorskoe-soprovozhdenie" className="services_block_item services_block_sup">
        <h2  className="services_block_sup_title">Авторское сопровождение</h2>
        <p ref={ref}  className="services_block_sup_text">Осуществляем контроль за&nbsp;строительством, соблюдением сроков и&nbsp;полному соответствию дизайн проекту.</p>
      </Link>
      <Link to="/uslugi/komplektaciya-obekta" className="services_block_item services_block_com">
        <h2 className="services_block_com_title">Комплектация объектов</h2>
        <p className="services_block_com_text">Комплектуем объект, формируемый в&nbsp;результате реализации дизайн проекта или архитектурного проекта, всеми необходимыми материалами.</p>
      </Link>
      <Link to="/uslugi/soglasovanie" className="services_block_item services_block_agr">
        <h2 className="services_block_agr_title">Согласование проекта</h2>
        <p className="services_block_agr_text">Мы&nbsp;разрабатываем свои проекты в&nbsp;соответствии со&nbsp;строительными нормами и&nbsp;правилами Республики Беларусь.</p>
      </Link>
    </div>
  )
}
