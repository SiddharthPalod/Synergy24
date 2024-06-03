import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showComponent, hideComponent } from './store';

function LazyComponent({ children, id }) {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.visibility.visibility[id]);
  const ref = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(showComponent(id));
          if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
          }
        } else {
          if (timerRef.current) {
            clearTimeout(timerRef.current);
          }
          timerRef.current = setTimeout(() => {
            dispatch(hideComponent(id));
          },50000);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0.1, 0.9],  // Adjust thresholds to handle partial visibility
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [dispatch, id]);

  return <div ref={ref}>{isVisible && children}</div>;
}

export default LazyComponent;
