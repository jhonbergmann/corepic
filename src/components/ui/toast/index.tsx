import React, {useEffect, useState} from 'react'
import {Animated} from 'react-native'
import {CheckCircle, AlertTriangle, AlertCircle, Info} from 'lucide-react-native'

import {ToastContainerProps, ToastItemProps} from '@/components/ui/toast/data'
import {Container, AnimatedToast, IconContainer, ContentContainer, ToastTitle, ToastMessage} from '@/components/ui/toast/layout/styles'

const ToastContainer = ({toasts}: ToastContainerProps) => {
  return (
    <Container>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </Container>
  )
}

const ToastItem = ({toast}: ToastItemProps) => {
  const {title, message, type, icon} = toast
  const [fadeAnim] = useState(new Animated.Value(0))

  const iconMap: {[key: string]: React.ReactNode} = {
    success: <CheckCircle size={24} color="white" />,
    warning: <AlertTriangle size={24} color="white" />,
    error: <AlertCircle size={24} color="white" />,
    info: <Info size={24} color="white" />,
  }

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()

    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start()
    }
  }, [fadeAnim])

  return (
    <AnimatedToast style={{opacity: fadeAnim}} type={type as never}>
      <IconContainer>{icon || iconMap[type]}</IconContainer>
      <ContentContainer>
        {title && <ToastTitle>{title}</ToastTitle>}
        {message && <ToastMessage>{message}</ToastMessage>}
      </ContentContainer>
    </AnimatedToast>
  )
}

export default ToastContainer
