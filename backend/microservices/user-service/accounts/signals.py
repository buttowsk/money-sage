from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
from djoser import signals

User = get_user_model()


@receiver(signals.user_registered)
def activate_user(sender, **kwargs):
    user = kwargs.get('user')
    if user and not user.is_active:
        user.is_active = True
        user.save()


post_save.connect(activate_user, sender=User)
