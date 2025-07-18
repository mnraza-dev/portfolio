import { cn } from "../../lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { delay: idx * 0.05 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  key={item.title}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "w-max p-2 z-30 relative mx-auto flex flex-row items-center gap-x-2 px-1 bg-white/15 dark:bg-black/20 backdrop-blur-xl backdrop-saturate-150 rounded-2xl border border-white/20 dark:border-white/10 [background:linear-gradient(180deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05))] dark:[background:linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.15))] [box-shadow:0_4px_15px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.1),0_0_0_1px_rgba(0,0,0,0.1)] dark:[box-shadow:0_4px_15px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.05),0_0_0_1px_rgba(0,0,0,0.2)] transform-gpu transition-all duration-300 ease-out hover:bg-white/25 hover:border-white/30 hover:[box-shadow:0_8px_20px_rgba(0,0,0,0.12),inset_0_0_0_1px_rgba(255,255,255,0.15),0_0_0_1px_rgba(0,0,0,0.1)] dark:hover:bg-black/30 dark:hover:border-white/15 dark:hover:[box-shadow:0_8px_20px_rgba(0,0,0,0.4),inset_0_0_0_1px_rgba(255,255,255,0.07),0_0_0_1px_rgba(0,0,0,0.2)] before:absolute before:inset-0 before:pointer-events-none before:rounded-2xl before:bg-gradient-to-b before:from-white/5 before:to-transparent before:dark:from-white/5 after:absolute after:inset-0 after:pointer-events-none after:rounded-2xl after:bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.15),transparent_70%)] after:dark:bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.08),transparent_70%)] max-h-14 sm:max-h-none",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href }) {
  let ref = useRef(null);
  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  // Remove scaling on hover: just use a fixed size
  let widthIcon = useTransform(distance, [-150, 0, 150], [24, 32, 24]);
  let heightIcon = useTransform(distance, [-150, 0, 150], [24, 32, 24]);
  let widthIconSpring = useSpring(widthIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  let heightIconSpring = useSpring(heightIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  const [hovered, setHovered] = useState(false);
  return (
    <a
      ref={ref}
      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground rounded-full relative size-12 transition-colors hover:bg-white/20 dark:hover:bg-white/10"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        style={{ width: 28, height: 28 }}
        className="flex items-center justify-center"
      >
        {icon}
      </motion.div>
      <span className="sr-only">{title}</span>
    </a>
  );
} 