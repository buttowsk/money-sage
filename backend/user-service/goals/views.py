from goals.serializers import SaveGoalSerializer
from goals.models import SaveGoal
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated


class SaveGoalList(generics.ListCreateAPIView):
    queryset = SaveGoal.objects.all()
    serializer_class = SaveGoalSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class SaveGoalDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = SaveGoal.objects.all()
    serializer_class = SaveGoalSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
